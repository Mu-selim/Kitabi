import React from "react";
import LeftNav from "./leftNav/LeftNav";
import "./Navbar.scss";
import RightNav from "./rightNav/RightNav";
import SideMenu from "./sideMenu/SideMenu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="redline"></div>
      <nav className="nav-box">
        <RightNav />
        <LeftNav />
        <SideMenu />
      </nav>
    </div>
  );
};

export default Navbar;
