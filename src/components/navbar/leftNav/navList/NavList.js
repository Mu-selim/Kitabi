import { Link } from "react-router-dom";
import Discount from "../../../../utils/icons/discount/Discount";
import Upload from "../../../../utils/icons/upload/Upload";
import "./NavList.scss";
import { useContext } from "react";
import { MenuContext } from "../../../../hooks/contexts/useMenuContext";

const NavList = () => {
  const {setMenu} = useContext(MenuContext);

  const clickHandle = () => {
    setMenu(null);
  }

  return (
    <ul className="nav-list">
      <li onClick={clickHandle}>
        <Link className="nav-links" to="/books">
          الكتب
        </Link>
      </li>
      <li onClick={clickHandle}>
        <Link className="nav-links" to="/discouts">
          <span>الخصومات</span>
          <div>
            <Discount />
          </div>
        </Link>
      </li>
      <li onClick={clickHandle}>
        <Link className="nav-links" to="/categories">
          الأقسام
        </Link>
      </li>
      <li onClick={clickHandle}>
        <Link className="nav-links" to="/with-us">
          <span>انشر معنا</span>
          <div>
            <Upload />
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
