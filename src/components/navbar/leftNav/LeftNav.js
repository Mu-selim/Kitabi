import React from "react";import NavList from "./navList/NavList";
import "./LeftNav.scss";
import Register from "./register/Register";

const LeftNav = () => {
  return (
    <div className="left-nav">
        <NavList />
        <Register />
    </div>
  );
};

export default LeftNav;
