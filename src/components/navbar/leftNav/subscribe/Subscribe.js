import { Link } from "react-router-dom";
import "./Subscribe.scss";
import { useContext } from "react";
import { MenuContext } from "../../../../hooks/contexts/useMenuContext";

const Subscribe = () => {
  const { setMenu } = useContext(MenuContext);

  const clickHandle = () => {
    setMenu(null);
  };

  return (
    <div className="subscribe" onClick={clickHandle}>
      <Link className="subscribe-link" to="/subscribe">
        تابعنا
      </Link>
    </div>
  );
};

export default Subscribe;
