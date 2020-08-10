import React, { useState, useEffect, useReducer, useContext } from "react";
import AuthorSearchBar from "./AuthorSearchBar";
import Author from "./Author";
import Spinner from "../shared/Spinner";
import { REQUEST_STATUS } from "../../reducers/request";
import { DataContext, DataProvider } from "../../contexts/DataContexts";

const AuthorsSectionComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { records: authors, status, error, put } = useContext(DataContext);

  const onFavoriteToggleHandler = async (authorToToggle) => {
    put({
      ...authorToToggle,
      isFavorite: !authorToToggle.isFavorite,
    });
    const toggledAuthor = {
      ...authorToToggle,
      isFavorite: !authorToToggle.isFavorite,
    };
  };

  const mapAPIDataToView = (authors) => {
    return authors.map((author) => {
      return {
        username: author.login.username,
        firstName: author.name.first,
        lastName: author.name.last,
        profileImageUrl: author.picture.large,
        isFavorite: author.name.first.length > 6 ? true : false,
      };
    });
  };

  const isSuccess = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const isError = status === REQUEST_STATUS.ERROR;

  return (
    <div className="wrapper bg-gray-200 px-4 py-10 pb-56">
      {isLoading && (
        <Spinner
          primaryColor="#4c0082e5"
          secondaryColor="#4c008225"
          className="mx-auto mt-16"
        />
      )}
      {isSuccess && (
        <React.Fragment>
          <AuthorSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex flex-wrap align-items justify-start lg:container lg:mx-auto -mx-3">
            {authors
              .filter((author) => {
                const targetString = `${author.firstName} ${author.lastName}`.toLowerCase();
                return searchQuery.length === 0
                  ? true
                  : targetString.includes(searchQuery.toLowerCase());
              })
              .map((author) => {
                console.log();
                return (
                  <Author
                    key={author.id}
                    {...author}
                    onFavoriteToggleHandler={() =>
                      onFavoriteToggleHandler(author)
                    }
                  />
                );
              })}

            {isError && <p>Something went wrong {error.message}</p>}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const AuthorSection = (props) => {
  return (
    <DataProvider baseUrl="http://localhost:4000" routeName="users">
      <AuthorsSectionComponent {...props}></AuthorsSectionComponent>
    </DataProvider>
  );
};

export default AuthorSection;
