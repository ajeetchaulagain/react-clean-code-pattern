import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper bg-indigo-700">
      <header className="bg-indigo-700 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center lg:container mx-auto">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <h2 className="text-indigo-100 font-bold text-2xl leading-none">
              Author Database
            </h2>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="block button text-indigo-300 focus:text-indigo-200 hover:text-indigo-200 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            isMenuOpen
              ? `px-2 pt-2 pb-4 block sm:flex sm:p-0 font-medium`
              : `px-2 pt-2 pb-4 hidden sm:flex sm:p-0 font-medium`
          }
        >
          <a
            href="#"
            className="block px-2 py-1 text-white hover:bg-indigo-900 rounded sm:ml-2"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white hover:bg-indigo-900 rounded sm:mt-0 sm:ml-2"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block px-2 py-1 text-white hover:bg-indigo-900 rounded sm:mt-0 sm:ml-2"
          >
            View on Github
          </a>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {};

export default Header;
