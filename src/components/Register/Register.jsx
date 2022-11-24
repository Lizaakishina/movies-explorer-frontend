import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

const Register = () => {
  return (
    <main>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип"/>
        <h2 className="register__hello">Добро пожаловать!</h2>
        <p className="register__question">Уже зарегистрированы? <Link to="/signin" className="link register__link">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;