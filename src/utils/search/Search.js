import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import "./Search.scss";

const Search = ({ propsData }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setSearchText(e.target.value);
  };

  const keyPressHandle = (e) => {
    if (e.key === "Enter" && searchText !== "") {
      setSearchText("");
      e.target.value = "";
      navigate(`search/${searchText}`);
    }
  };

  const clickHandle = () => {
    if(searchText === "") return;
    setSearchText("");
    navigate(`search/${searchText}`);
  };

  return (
    <div className="search">
      <input
        className={propsData.borderRadiusInput}
        type="text"
        placeholder={propsData.placeholder}
        onChange={changeHandle}
        onKeyPress={keyPressHandle}
      />
      <div 
        className={`SearchIcon ${propsData.borderRadiusSearchIcon}`}
        onClick={clickHandle}
      >  
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
