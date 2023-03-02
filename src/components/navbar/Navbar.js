import React from "react";
import "./Navbar.scss";
import RightNav from "./rightNav/RightNav";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="redline"></div>
      <nav className="nav-box">
        <RightNav />
      </nav>
    </div>
  );
};

export default Navbar;
