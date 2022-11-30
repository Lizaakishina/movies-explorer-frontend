import {Link} from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import logo from "../../images/logo.svg";
import "./Login.css";
import { useValidation } from "../../hook/useValidation";

const Login = () => {
  const { handleChange, errors, isValid } = useValidation();

  return (
    <main>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип"/>
        <h2 className="login__hello">Рады видеть!</h2>
        <form className="login__form form" noValidate>
          <Fieldset
            input = "email"
            inputType = "email"
            placeholder = "E-mail"
            name="email"
            minLength="4"
            maxLength="40"
            onChange={handleChange}
            errors={errors}
            isValid={isValid}
          />
          <Fieldset
            input = "password"
            inputType = "password"
            placeholder = "Пароль"
            name="password"
            minLength="8"
            maxLength="50"
            onChange={handleChange}
            errors={errors}
            isValid={isValid}
          />
          <button className={`button form__button ${!isValid && "form__button_inactive"}`} disabled={!isValid}>Войти</button> 
        </form>
        <p className="login__ask">Ещё не зарегистрированы? <Link to="/signup" className="link login__link">Регистрация</Link></p>
      </section>
    </main>
  )
}

export default Login;