import "./MovieCard.css";
import save_active from "../../images/save_active.svg";
import close from "../../images/close.svg";
import save_disactive from "../../images/save_disactive.svg";
import { useLocation } from "react-router";

const MovieCard = ({nameRus, image, time}) => {
  const url = useLocation();
  const isSaved = true;
  const moviesCardSaved = isSaved ? save_active : save_disactive;
  const moviesCardClose = url.pathname==="/movies" ? moviesCardSaved : close;
  const hour = (time / 60).toFixed(0);
  const minute = time % 60;
  
  return (
    <div className="movieCard">
      <div className="movieCard__flexbox">
        <div className="movieCard__description">
          <h3 className="movieCard__name">{nameRus}</h3>
          <p className="movieCard__time">{hour}ч {minute < 10 ? "0" + minute : minute}м</p>
        </div>
        <button type="button" className="button">
          <img className="movieCard__save" src={moviesCardClose} alt="В избранное"/>
        </button>
      </div>
      <img className="movieCard__shot" src={`https://api.nomoreparties.co${image}`} alt="Кадр из фильма"/>
    </div>
  )
}

export default MovieCard;