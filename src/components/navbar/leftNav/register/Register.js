import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
    return (
        <div className="register">
            <Link className="register-link" to="/register">تسجيل</Link>
        </div>
    );
}

export default Register;