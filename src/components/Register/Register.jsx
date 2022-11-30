import {Link} from "react-router-dom";
import Fieldset from "../Fieldset/Fieldset";
import logo from "../../images/logo.svg";
import "./Register.css";
import { useValidation } from "../../hook/useValidation";

const Register = ({onSubmit, errorMessageApi}) => {
  const { values, handleChange, errors, isValid } = useValidation();

  function handleSubmit (e) {
    e.preventDefault();

    onSubmit({
      name: values.name,
      email: values.email,
      password: values.password
    })
  }

  return (
    <main>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип"/>
        <h2 className="register__hello">Добро пожаловать!</h2>
        <form className="form register__form" onSubmit={handleSubmit} noValidate>
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
          <span className={`register__errorMessage ${!!errorMessageApi && "register__errorMessage_active"}`}>{errorMessageApi}</span>
          <button className={`button form__button ${!isValid && "form__button_inactive"}`} disabled={!isValid}>Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы? <Link to="/signin" className="link register__link">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;