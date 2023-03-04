import { useState } from "react";
import SearchIcon from "../icons/searchicon/SearchIcon";
import "./Search.scss";

const Search = ({ propsData }) => {
  const [searchText, setSearchText] = useState("");

  const changeHandle = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  return (
    <div className="search">
      <input
        className={propsData.borderRadiusInput}
        type="text"
        placeholder={propsData.placeholder}
        onChange={changeHandle}
      />
      <div className={`SearchIcon ${propsData.borderRadiusSearchIcon}`}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
