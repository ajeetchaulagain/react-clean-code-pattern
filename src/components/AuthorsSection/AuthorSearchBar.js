import React from "react";

const AuthorSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-wrapper w-full mx-auto mb-16 mt-12 sm:mt-15  sm:mb-20 sm:max-w-2xl">
      <input
        className="shadow-xs appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-nones focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        placeholder="Enter username to search Author"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

AuthorSearchBar.propTypes = {};

export default AuthorSearchBar;
