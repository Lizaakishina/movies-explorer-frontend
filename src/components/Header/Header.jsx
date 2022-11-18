import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";
import chel from "../../images/chel.svg";
import PopupMenu from "./PopupMenu/PopupMenu";

const Header = ({loggedIn}) => {
  return (
    <header className="header">
      <Link to="/" className="link header__link_type_logo>">
        <img src={logo} className="header__logo" alt='логотип' />
      </Link>
      {loggedIn? 
        <>
          <div className="header__navigation header__navigation_type_movies">
            <div className="header__flex">
              <NavLink to="/movies" className="link header__navLink" activeClassName="header__navLink_active">Фильмы</NavLink>
              <NavLink to="/saved-movies" className="link header__navLink" activeClassName="header__navLink_active">Сохранённые фильмы</NavLink>
            </div>
            <div className="header__navigation">
              <NavLink to="/profile" className="link header__link_type_acc">Аккаунт</NavLink>
              <div className="header__chelbox">
                <img src={chel} className="header__chel" alt='человечек' />
              </div>
            </div>
          </div> 
          <PopupMenu />
        </>
      : <div className="header__navigation">
          <Link to="/signup" className="link header__link">Регистрация</Link>
          <Link to="/signin" className="link header__link header__link_type_signin">Войти</Link>
        </div>
      }
    </header>
  )
}

export default Header;