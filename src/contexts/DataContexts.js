import React from "react";
const DataContext = React.createContext();
import useRequest from "../hooks/useRequest";

const DataProvider = ({ children, baseUrl, routeName }) => {
  const state = useRequest(baseUrl, routeName);
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
