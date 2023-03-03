import React, { useContext } from "react";
import NavList from "./navList/NavList";
import "./LeftNav.scss";
import Register from "./register/Register";
import { MenuContext } from "../../../hooks/contexts/useMenuContext";

const LeftNav = () => {
  const { menu } = useContext(MenuContext);
  
  return (
    <div className={`left-nav ${menu}`}>
      <NavList />
      <Register />
    </div>
  );
};

export default LeftNav;
