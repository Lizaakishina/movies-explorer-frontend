import {Link} from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import logo from "../../images/logo.svg";
import "./Register.css";
import { useValidation } from "../../hook/useValidation";

const Register = () => {
  const { handleChange, errors, isValid } = useValidation();

  return (
    <main>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип"/>
        <h2 className="register__hello">Добро пожаловать!</h2>
        <form className="form register__form" noValidate>
          <Fieldset
            input = "text"
            inputType = "name"
            placeholder = "Имя"
            name="name"
            minLength="4"
            maxLength="40"
            onChange={handleChange}
            errors={errors}
            isValid={isValid}
          />
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
            errorMessage="Что-то пошло не так..."
            name="password"
            minLength="8"
            maxLength="50"
            onChange={handleChange}
            errors={errors}
            isValid={isValid}
          />
          <button className={`button form__button ${!isValid && "form__button_inactive"}`} disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы? <Link to="/signin" className="link register__link">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;