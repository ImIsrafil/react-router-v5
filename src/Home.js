import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import Feed from "./Feed";

const Home = () => {
  const { searchResult, isLoading, fetchError } = useContext(DataContext);
  return (
    <>
      {isLoading ? (
        <p>Loading Posts...</p>
      ) : fetchError ? (
        <p>{fetchError}</p>
      ) : searchResult.length ? (
        <Feed posts={searchResult} />
      ) : (
        <p>No posts to display</p>
      )}
    </>
  );
};

export default Home;
