import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const AutoSuggestBar = ({
  searchQuery,
  setSearchQuery,
  setShowSuggestions,
}) => {
  const handleSuggestionClick = () => {
    console.log("Suggestion clicked:", searchQuery);
    setSearchQuery(searchQuery);
    setShowSuggestions(false);
  };

  return (
    <div>
      <Link to={`/search?q=${searchQuery}`} onClick={handleSuggestionClick}>
        <div className="mx-8 text-md text-gray-600 flex gap-2 items-center hover:bg-gray-200 bg-white cursor-pointer py-2 2xl:w-[42rem] xl:w-5/6 lg:w-40 md:w-40 sm:w-40 xs:w-40">
          <BiSearch className="text-gray-400" />
          <h1>{searchQuery}</h1>
        </div>
      </Link>
    </div>
  );
};

export default AutoSuggestBar;
