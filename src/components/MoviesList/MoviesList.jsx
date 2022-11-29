import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const MoviesList = ({movies, isLoader, movieErrorMessage}) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [moviesDisplay, setMovieDisplay] = useState([]);
  const url = useLocation();

  useEffect (() => {
    if (url.pathname === "/movies") {
      if (window.screen.width > 780) {
        setMovieDisplay(movies.slice(0, 12));
        movies.length > 12 && setIsButtonActive(true);
      }  else if (window.screen.width <= 780 && window.screen.width > 480) {
        setMovieDisplay(movies.slice(0, 8));
        movies.length > 8 && setIsButtonActive(true);
      } else if (window.screen.width < 480) {
        setMovieDisplay(movies.slice(0, 5));
        movies.length > 5 && setIsButtonActive(true);
      }
    }
  }, [movies])

  let movieElement;
  if (url.pathname==="/movies") {
    movieElement = moviesDisplay.map(movie => (
      <li key={movie.id}>
        <MovieCard 
        key={movie.id}
        nameRus={movie.nameRUS}
        image={movie.image.url}
        time={movie.time}
        movie={movie}
        />
      </li>
    ))
  }

  return (
    <section className="moviesList">
      {movieErrorMessage && <h2 className="moviesList__title">{movieErrorMessage}</h2>}
      <ul className="list moviesList__grid">
        {movieElement}
      </ul>
      {isLoader && <Preloader />}
      {(url.pathname==="/movies" && isButtonActive ) && <button type="button" className="button moviesList__button">Ещё</button>}
    </section>
  )
}

export default MoviesList;