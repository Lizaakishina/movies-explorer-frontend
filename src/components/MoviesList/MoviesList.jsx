import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Preloader/Preloader";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router";

const MoviesList = ({filterMovies, isLoader, movieErrorMessage, onCreateMovie, savedMovies, onDeleteMovie, filterSavedMovies = null }) => {
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
  }, [])

  useEffect(() => {
    if (windowSize > 780) {
      setCount(12)
    } else if (windowSize <= 780 && windowSize > 480) {
      setCount(8)
    } else if (windowSize <= 480) {
      setCount(5);
    }
  }, [windowSize])

  useEffect(() => {
    if (url.pathname === '/movies') {
      if (windowSize > 780) {
        setMoviesDisplay(filterMovies.slice(0, count));
      }  else if (windowSize <= 780 && windowSize > 480) {
        setMoviesDisplay(filterMovies.slice(0, count));
      } else if (windowSize <= 480) {
        setMoviesDisplay(filterMovies.slice(0, count));
      }
    } else {
      setMoviesDisplay(filterMovies)
    }
  }, [filterMovies, count])

  const handleMovieDisplay = () => {
    if (windowSize > 790) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + 3))
    }  else if (windowSize <= 790 && windowSize > 450) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + 2))
    } else if (windowSize <= 450) {
      setMoviesDisplay(filterMovies.slice(0, moviesDisplay.length + 2))
    }
  }

  let movieElement;
    movieElement = moviesDisplay.map(movie => (
      <li key={movie.id || movie._id}>
        <MovieCard 
          key={movie.id || movie._id}
          movie={movie}
          savedMovies={savedMovies}
          onCreateMovie={onCreateMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </li>
    )
  )

  return (
    <section className="moviesList">
      {movieErrorMessage && <h2 className="moviesList__title">{movieErrorMessage}</h2>}
      <ul className="list moviesList__grid">
        {movieElement}
      </ul>
      {isLoader && <Preloader />}
      {(url.pathname==="/movies" && filterMovies.length > moviesDisplay.length) && 
        <button type="button" className="button moviesList__button" onClick={handleMovieDisplay}>Ещё</button>
      }
    </section>
  )
}

export default memo(MoviesList);