import "./MovieCard.css";
import save_active from "../../images/save_active.svg";
import close from "../../images/close.svg";
import save_disactive from "../../images/save_disactive.svg";
import { useLocation } from "react-router";

const MovieCard = ({movie, image, trailer}) => {
  const url = useLocation();
  const isSaved = true;
  const moviesCardSaved = isSaved ? save_active : save_disactive;
  const moviesCardClose = url.pathname==="/movies" ? moviesCardSaved : close;
  const hour = (movie.duration / 60).toFixed(0);
  const minute = movie.duration % 60;
  
  return (
    <div className="movieCard">
      <div className="movieCard__flexbox">
        <div className="movieCard__description">
          <h3 className="movieCard__name">{movie.nameRU}</h3>
          <p className="movieCard__time">{hour}ч {minute < 10 ? "0" + minute : minute}м</p>
        </div>
        <button type="button" className="button">
          <img className="movieCard__save" src={moviesCardClose} alt="В избранное"/>
        </button>
      </div>
      <a className="link" href={trailer} target="blank">
        <img className="movieCard__shot" src={`https://api.nomoreparties.co${image}`} alt="Кадр из фильма" />
      </a>
    </div>
  )
}

export default MovieCard;