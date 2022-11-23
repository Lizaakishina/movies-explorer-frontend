import "./MovieCard.css";
import save_active from "../../images/save_active.svg";
import movie from "../../images/movie.svg";

const MovieCard = () => {
  return (
    <div className="movieCard">
      <div className="movieCard__flexbox">
        <div className="movieCard__description">
          <h3 className="movieCard__name">33 слова о дизайне</h3>
          <p className="movieCard__time">1ч 47м</p>
        </div>
        <button type="button" className="button movieCard__button">
          <img className="movieCard__save" src={save_active} alt="В избранное"/>
        </button>
      </div>
      <img className="movieCard__shot" src={movie} alt="Кадр из фильма"/>
    </div>
  )
}

export default MovieCard;