import React from "react";
import PropTypes from "prop-types";

const Author = ({
  firstName,
  lastName,
  username,
  profileImageUrl,
  isFavorite,
  onFavoriteToggleHandler,
}) => {
  console.log("author component");
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-5 h-full">
      <div className="rounded-lg border shadow-xl overflow-hidden bg-white">
        <img src={profileImageUrl} className="w-full max-h-80 object-contain" />
        <div className="px-5 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-800 text-xl font-bold truncate">
              {firstName} {lastName}
            </h2>
            <div
              onClick={onFavoriteToggleHandler}
              className={`heart ${
                isFavorite ? `text-red-800` : `text-gray-400`
              }`}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600">
            Matt Mullenbag is founder of Wordpress and Automattic
          </p>
        </div>
      </div>
    </div>
  );
};

Author.propTypes = {};

export default Author;
