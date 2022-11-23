import React from "react";
import line from "../../../images/line.svg";
import closeButton from "../../../images/close-button.svg";
import useOpenPopup from "../../../hook/useOpenPopup";
import "./PopupMenu.css";

const PopupMenu = ({logIn}) => {
  const {handlePopupClick, isButtonPopup} = useOpenPopup(false);
  return (
    <section className="popupMenu">
      <button type="button" className={`button popupMenu__button ${logIn && "popupMenu__button_type_logIn"}`} onClick={handlePopupClick}>
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
      </button>
      <div className={`popupMenu__container ${isButtonPopup && "popupMenu__container_opened"}`}>
        <button type="button" className="button popupMenu__button popupMenu__button_type_close" onClick={handlePopupClick}>
          <img className="popupMenu__close" src={closeButton} alt="Крестик"/>
        </button>
      </div>
    </section>
  )
}

export default PopupMenu;