import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";
import { memo, useEffect, useState } from "react";
import useFilterMovies from "../../hook/useFilterMovies";

const SavedMovies = ({loggedIn, savedMovies, onDeleteMovie, isLoader }) => {
  const [longMovie, setLongMovie] = useState([]);
  const [movie, setMovies] = useState([])
  const {handleSearch, handleCheckbox} = useFilterMovies();
  useEffect(() => {
    setMovies(savedMovies);
    setLongMovie(savedMovies);
  }, [savedMovies])

  const handleSearchMovies = (movieName, checked) => {
    const list = handleSearch(savedMovies, movieName);
    const shortList = handleCheckbox(list, checked);
    setMovies(shortList);
    setLongMovie(list);
  }

  const handleResetSearch = (checked) => {
    const shortList = handleCheckbox(savedMovies, checked);
    setMovies(shortList);
    setLongMovie(shortList);
  }

  const handleChangeCheckbox = (checked) => {
    const shortList = handleCheckbox(longMovie, checked);
    setMovies(shortList);
  }

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm onSearch={handleSearchMovies} onResetForm={handleResetSearch} onChange={handleChangeCheckbox} isLoader={isLoader}/>
        <MoviesList filterMovies={movie} onDeleteMovie={onDeleteMovie} />
      </main>
      <Footer />
    </>
  )
}

export default memo(SavedMovies);