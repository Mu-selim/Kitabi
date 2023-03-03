import { useContext } from "react";
import "./SideMenu.scss";
import { MenuContext } from "../../../hooks/contexts/useMenuContext";

const SideMenu = () => {
  const { menu, setMenu } = useContext(MenuContext);

  const clickHandle = () => {
    if (menu !== "active") {
      setMenu("active");
    } else {
      setMenu(null);
    }
  };
  
  return (
    <menu 
    className={`hamburger-menu ${menu}`} 
    onClick={clickHandle}
    >
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </menu>
  );
};

export default SideMenu;
