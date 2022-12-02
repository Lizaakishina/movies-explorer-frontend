import { useEffect, useState } from "react";

export const useSearchMovies = (type) => {
  const [nameOfMovie, setNameOfMovie] = useState('');

  useEffect(() => {
    if(type === "movies")
    setNameOfMovie(sessionStorage.getItem('moviesName') || '');
  }, [type]);

  function handleSearch (e) {
    e.preventDefault();
    sessionStorage.setItem('moviesName', nameOfMovie);
  }

  function handleChange (e) {
    setNameOfMovie(e.target.value);
  }

  return {handleChange, handleSearch, nameOfMovie}
}