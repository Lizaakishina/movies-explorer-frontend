import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

const Login = () => {
  return (
    <main>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип"/>
        <h2 className="login__hello">Рады видеть!</h2>
        <p className="login__ask">Ещё не зарегистрированы? <Link to="/signup" className="link login__link">Регистрация</Link></p>
      </section>
    </main>
  )
}

export default Login;