import "./MovieCard.css";
import save_active from "../../images/save_active.svg";
import close from "../../images/close.svg";
import save_disactive from "../../images/save_disactive.svg";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const MovieCard = ({movie, savedMovies, onCreateMovie, onDeleteMovie}) => {
  const url = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const moviesCardSaved = isSaved ? save_active : save_disactive;
  const moviesCardClose = url.pathname==="/movies" ? moviesCardSaved : close;
  const poster = url.pathname ==="/movies" ? `https://api.nomoreparties.co${movie.image.url}` : movie.image; 
  const hour = (movie.duration / 60).toFixed(0);
  const minute = movie.duration % 60;
  
  useEffect(() => {
    if (url.pathname === "/movies") {
      const isOwner = savedMovies.some((item) => item.movieId === movie.id && item.owner._id === currentUser._id)
      setIsSaved(isOwner);
    }
  }, [])

  const handleClick = () => {
    if (url.pathname === "/saved-movies") {
      onDeleteMovie(movie);
    } else {
      const findMovie = savedMovies.find((item) => item.movieId === movie.id)
      isSaved ? onDeleteMovie(findMovie) : onCreateMovie(movie);
      setIsSaved(state => !state);
    }
  }

  return (
    <div className="movieCard">
      <div className="movieCard__flexbox">
        <div className="movieCard__description">
          <h3 className="movieCard__name">{movie.nameRU}</h3>
          <p className="movieCard__time">{hour}ч {minute < 10 ? "0" + minute : minute}м</p>
        </div>
        <button type="button" className="button" onClick={handleClick}>
          <img className="movieCard__save" src={moviesCardClose} alt="В избранное"/>
        </button>
      </div>
      <a className="link  movieCard__link" href={movie.trailerLink} target="_blank">
        <img className="movieCard__shot" src={poster} alt="Кадр из фильма" />
      </a>
    </div>
  )
}

export default MovieCard;