import React from "react";
import "./PopupMenu.css";
import line from "../../../images/line.svg"
import chel from "../../../images/chel.svg";
import closeButton from "../../../images/close-button.svg";
import { NavLink } from "react-router-dom";
import useOpenPopup from "../../../hook/useOpenPopup";

const PopupMenu = ({loggedIn}) => {
const {handleMenuClick, isButtonMenu} = useOpenPopup(false);

  return(
    <section className="popupMenu">
      <button 
        type="button"
        className={`button popupMenu__button ${loggedIn && "popupMenu__button_type_loggedIn"}`} 
        onClick={handleMenuClick}
      >
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
      </button>

      <div className={`popupMenu__container ${isButtonMenu && "popupMenu__container_opened"}`}>
        <button type="button" className="button popupMenu__button popupMenu__button_type_close" onClick={handleMenuClick}>
          <img className="popupMenu__close" src={closeButton} alt="Крестик"/>
        </button>
        <div className="popupMenu__flex">
          <NavLink exact to="/" className="link popupMenu__link" activeClassName="popupMenu__link_active">Главная</NavLink>
          <NavLink to="/movies" className="link popupMenu__link" activeClassName="popupMenu__link_active">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="link popupMenu__link" activeClassName="popupMenu__link_active">Сохранённые фильмы</NavLink>
        </div>
        <div className="popupMenu__navigation">
          <NavLink to="/profile" className="link popupMenu__link_type_acc">Аккаунт</NavLink>
            <div className="popupMenu__chelbox">
              <img src={chel} className="popupMenu__chel" alt='человечек' />
            </div>
          </div>
      </div>
    </section>
  )
}

export default PopupMenu;