import React, { useContext } from "react";
import NavList from "./navList/NavList";
import "./LeftNav.scss";
import Subscribe from "./subscribe/Subscribe";
import { MenuContext } from "../../../hooks/contexts/useMenuContext";

const LeftNav = () => {
  const { menu } = useContext(MenuContext);
  
  return (
    <div className={`left-nav ${menu}`}>
      <NavList />
      <Subscribe />
    </div>
  );
};

export default LeftNav;
