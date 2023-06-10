import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search posts"
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
