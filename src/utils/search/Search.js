import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../icons/searchicon/SearchIcon";
import "./Search.scss";

const Search = ({ propsData }) => {
  const [searchText, setSearchText] = useState("");

  const changeHandle = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search">
      <input
        className={propsData.borderRadiusInput}
        type="text"
        placeholder={propsData.placeholder}
        onChange={changeHandle}
      />
      <Link
        to={`/search/${searchText}`}
        className={`SearchIcon ${propsData.borderRadiusSearchIcon}`}
      >
        <SearchIcon />
      </Link>
    </div>
  );
};

export default Search;
