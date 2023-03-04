import { Link } from "react-router-dom";
import "./Register.scss";
import { useContext } from "react";
import { MenuContext } from "../../../../hooks/contexts/useMenuContext";

const Register = () => {
  const { setMenu } = useContext(MenuContext);

  const clickHandle = () => {
    setMenu(null);
  };

  return (
    <div className="register" onClick={clickHandle}>
      <Link className="register-link" to="/register">
        تسجيل
      </Link>
    </div>
  );
};

export default Register;
