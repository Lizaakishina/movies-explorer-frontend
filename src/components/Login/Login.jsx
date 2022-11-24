import {Link} from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import logo from "../../images/logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <main>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип"/>
        <h2 className="login__hello">Рады видеть!</h2>
        <form className="login__form form" noValidate>
          <Fieldset input = "email" inputType = "email" placeholder = "E-mail"/>
          <Fieldset input = "password" inputType = "password" placeholder = "Пароль"/>
          <button className="button form__button">Войти</button> 
        </form>
        <p className="login__ask">Ещё не зарегистрированы? <Link to="/signup" className="link login__link">Регистрация</Link></p>
      </section>
    </main>
  )
}

export default Login;