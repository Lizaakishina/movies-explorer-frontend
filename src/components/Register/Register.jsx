import {Link} from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import logo from "../../images/logo.svg";
import "./Register.css";

const Register = () => {
  return (
    <main>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип"/>
        <h2 className="register__hello">Добро пожаловать!</h2>
        <form className="form register__form" noValidate>
          <Fieldset input = "text" inputType = "name" placeholder = "Имя"/>
          <Fieldset input = "email" inputType = "email" placeholder = "E-mail"/>
          <Fieldset input = "password" inputType = "password" placeholder = "Пароль" errorMessage="Что-то пошло не так..."/>
          <button className="button form__button">Зарегистрироваться</button> 
        </form>
        <p className="register__question">Уже зарегистрированы? <Link to="/signin" className="link register__link">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;