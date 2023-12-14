import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import AutoSuggestBar from "./AutoSuggestBar";
import useAutoSuggestion from "../utils/hooks/useAutoSuggestion";
import { BiUser } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const suggestions = useAutoSuggestion(searchQuery);
  const dispatch = useDispatch();
  const searchRef = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchInputChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    if (newQuery.trim() !== "") {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      setShowSuggestions(false);
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="grid grid-flow-col bg-white w-full z-10 p-4 shadow">
      <div className="col-span-1 xs:col-span-2 flex items-center gap-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />

        <Link to={"/"}>
          <img className="h-8 mx-2" alt="youtube-logo" src="logo.png" />
        </Link>
      </div>
      <span className="col-span-11 xs:col-span-8  mx-16 flex items-center justify-center">
        <span className="flex flex-col w-2/3" ref={searchRef}>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="w-full border outline-inherit px-6 text-md xs:h-8 h-10 border-gray-300 rounded-l-full"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => setShowSuggestions(true)}
            />

            {showSuggestions ? (
              <div
                onBlur={() => setShowSuggestions(false)}
                className="h-max absolute bg-white top-16 rounded-3xl  z-10 shadow-xl sm:w-[15rem] md:w-[20rem] lg:w-[28rem] xl:w-[35rem] 2xl:w-[35rem] transition duration-300"
              >
                {suggestions.length !== 0
                  ? suggestions?.map((query, index) => {
                      return (
                        <AutoSuggestBar
                          onBlur={() => setShowSuggestions(false)}
                          key={index}
                          searchQuery={query}
                          setSearchQuery={setSearchQuery}
                          setShowSuggestions={setShowSuggestions}
                        />
                      );
                    })
                  : null}
              </div>
            ) : null}
          </form>
        </span>

        <Link to={`search?q=${searchQuery}`}>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-r-full  p-2 px-4 xs:h-8 h-10  cursor-pointer bg-gray-100 border-2 border-gray-300 "
          >
            <GrSearch className="mx-2" />
          </button>
        </Link>
      </span>

      <span className="col-span-1 xs:col-span-2 cursor-pointer flex items-center justify-center">
        <BiUser />
      </span>
    </nav>
  );
};

export default Head;
