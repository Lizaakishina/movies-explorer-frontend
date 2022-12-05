import { useEffect, useState } from "react";

export const useSearchMovies = (type) => {
  const [nameOfMovie, setNameOfMovie] = useState('');

  useEffect(() => {
    if(type === "movies")
    setNameOfMovie(localStorage.getItem('moviesName') || '');
  }, [type]);

  const handleSearch = () => {
    localStorage.setItem('moviesName', nameOfMovie);
  }

  function handleChange (e) {
    setNameOfMovie(e.target.value);
  }

  return {handleChange, handleSearch, nameOfMovie}
}