import React from "react";
import line from "../../../images/line.svg"
import useOpenPopup from "../../../hook/useOpenPopup";
import "./PopupMenu.css";

const PopupMenu = ({logIn}) => {
  const {handlePopupClick} = useOpenPopup(false);
  return (
    <section className="popupMenu">
      <button type="button" className={`button popupMenu__button ${logIn && "popupMenu__button_type_logIn"}`} onClick={handlePopupClick}>
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
        <img className="popupMenu__line" src={line} alt="Линия"/>
      </button>
    </section>
  )
}

export default PopupMenu;