import { useState } from "react";
import { getMovies } from "../utils/mainApi";
import { NOT_MOVIES_SEARCH_MESSAGE, SERVER_ERROR_MESSAGE } from "../utils/constants";

const useGetMovie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [movieErrorMessage, setMovieErrorMessage] = useState('');

  const handleSearchMovie = async (e, movieName) => {
    try {
      setMovies([])
      setMovieErrorMessage('')
      setIsLoader(true);

      e.preventDefault();
      const moviesApi = await getMovies();
      const list = moviesApi.filter(movie => movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
                                    || movie.nameEN.toLowerCase().includes(movieName.toLowerCase()))
      list.length === 0 ? setMovieErrorMessage(NOT_MOVIES_SEARCH_MESSAGE) : setMovieErrorMessage('');
      setMovies(list)
    } catch (err) {
      setMovieErrorMessage(SERVER_ERROR_MESSAGE);
    } finally {
      setIsLoader(false);
    }
  }
  return {handleSearchMovie, movies, isLoader, movieErrorMessage};
}

export default useGetMovie;