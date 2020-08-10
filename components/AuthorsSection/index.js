import React, { useState, useEffect, useReducer } from "react";
import AuthorSearchBar from "./AuthorSearchBar";
import Author from "./Author";
import axios from "axios";
import Spinner from "../shared/Spinner";
import requestReducer, { REQUEST_STATUS } from "../../reducers/request";

import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_FAILURE,
  PUT_SUCCESS,
} from "../../actions/request";

const AuthorsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [{ records: authors, status, error }, dispatch] = useReducer(
    requestReducer,
    {
      status: REQUEST_STATUS.LOADING,
      records: [],
      error: null,
    }
  );

  console.log("authors", authors);

  const onFavoriteToggleHandler = async (authorToToggle) => {
    const toggledAuthor = {
      ...authorToToggle,
      isFavorite: !authorToToggle.isFavorite,
    };
    try {
      await axios.put(
        `http://localhost:4000/users/${toggledAuthor.id}`,
        toggledAuthor
      );

      dispatch({
        type: PUT_SUCCESS,
        record: toggledAuthor,
      });
    } catch (e) {
      dispatch({
        type: PUT_FAILURE,
        error: e,
      });
    }
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

  useEffect(() => {
    console.log("Use Effec Hook");
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/users`);
        dispatch({
          type: GET_ALL_SUCCESS,
          records: data,
        });
      } catch (err) {
        dispatch({
          type: GET_ALL_FAILURE,
          status: REQUEST_STATUS.ERROR,
          error: err,
        });
      }
    };
    fetchData();
  }, []);

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

export default AuthorsSection;
