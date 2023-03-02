import React from "react";
import "./RightNav.scss";
import logo from "../../../assets/logo.png";
import Search from "../../../utils/search/Search";
import { Link } from "react-router-dom";

const propsData = {
  placeholder: "عنوان الكتاب, المؤلف, دار النشر",
  borderRadiusInput: "input-small",
  borderRadiusSearchIcon: "search-small",
};

const RightNav = () => {
  console.log(logo);
  return (
    <div className="right-nav">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Search propsData={propsData} />
    </div>
  );
};

export default RightNav;
