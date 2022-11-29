import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const MoviesList = ({movies, isLoader, movieErrorMessage}) => {
  const [moviesDisplay, setMoviesDisplay] = useState([]);
  const [count, setCount] = useState(0);
  const [windowSize, setWindowsSite] = useState(window.screen.width)
  const url = useLocation();

  function handleChangeWindow () {
    setWindowsSite(window.screen.width)
  }

  useEffect(() => {
    window.addEventListener("resize", handleChangeWindow);
    return () => {
      window.removeEventListener("resize", handleChangeWindow);
    }
  })

  useEffect(() => {
    if (url.pathname === "/movies") {
      if (windowSize > 780) {
        setCount(12)
      } else if (windowSize <= 780 && windowSize > 480) {
        setCount(8)
      } else if (windowSize <= 480) {
        setCount(5);
      }
    }
  }, [url.pathname, windowSize])

  useEffect(() => {
    if (url.pathname === "/movies") {
      if (windowSize > 780) {
        setMoviesDisplay(movies.slice(0, count));
      } else if (windowSize <= 780 && windowSize > 480) {
        setMoviesDisplay(movies.slice(0, count));
      } else if (windowSize <= 480) {
        setMoviesDisplay(movies.slice(0, count));
      }
    }
  }, [count, movies, url.pathname, windowSize])

  function handleMovieDisplay () {
    if (windowSize > 780) {
      setMoviesDisplay(movies.slice(0, moviesDisplay.length + 3))
    } else if (windowSize <= 780 && windowSize > 480) {
      setMoviesDisplay(movies.slice(0, moviesDisplay.length + 2))
    } else if (windowSize <= 480) {
      setMoviesDisplay(movies.slice(0, moviesDisplay.length + 2))
    }
  }

  let movieElement;
  if (url.pathname==="/movies") {
    movieElement = moviesDisplay.map(movie => (
      <li key={movie.id}>
        <MovieCard 
        key={movie.id}
        nameRus={movie.nameRus}
        image={movie.image.url}
        time={movie.time}
        movie={movie}
        trailer={movie.trailerLink}
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
      {(url.pathname==="/movies" && movies.length > moviesDisplay.length) && 
        <button type="button" className="button moviesList__button" onClick={handleMovieDisplay}>Ещё</button>
      }
    </section>
  )
}

export default MoviesList;