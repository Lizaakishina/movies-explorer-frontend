import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import logo from "../../images/logo.svg";
import chel from "../../images/chel.svg";
import PopupMenu from "./PopupMenu/PopupMenu";

const Header = ({logIn}) => {
  return (
    <header className="header">
      <Link to="/" className="link header__link_type_logo>">
        <img src={logo} className="header__logo" alt='лого'/>
      </Link>
      {logIn? <>
          <div className="header__nav header__nav_type_movies">
            <div className="header__flexbox">
              <NavLink to="/movies" className="link header__navLink" activeClassName="header__navLink_active">Фильмы</NavLink>
              <NavLink to="/saved-movies" className="link header__navLink" activeClassName="header__navLink_active">Сохранённые фильмы</NavLink>
            </div>
            <div className="header__nav">
              <NavLink to="/profile" className="link header__link_type_acc">Аккаунт</NavLink>
              <div className="header__chelbox">
                <img src={chel} className="header__chel" alt='человечек'/>
              </div>
            </div>
          </div> 
          <PopupMenu />
        </>
       :<div className="header__nav">
          <Link to="/signup" className="link header__link">Регистрация</Link>
          <Link to="/signin" className="link header__link header__link_type_signin">Войти</Link>
        </div>
      }
    </header>
  )
}

export default Header;