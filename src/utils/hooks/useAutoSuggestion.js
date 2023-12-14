import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_AUTOSUGGEST_API } from "../constants";
import { cacheResults } from "../searchSlice";

const useAutoSuggestion = (searchQuery) => {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector((store) => store.search.suggestions);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchSuggestions[searchQuery]) {
        setSuggestions(searchSuggestions[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  async function getSearchSuggestions() {
    try {
      console.log("API CALL - " + searchQuery);
      const data = await fetch(YOUTUBE_AUTOSUGGEST_API + searchQuery);
      const autoQueries = await data.json();
      setSuggestions(autoQueries[1]);

      dispatch(
        cacheResults({
          [searchQuery]: autoQueries[1],
        })
      );
    } catch {
      console.error("Connectivity issue !!");
    }
  }
  return suggestions;
};
export default useAutoSuggestion;
