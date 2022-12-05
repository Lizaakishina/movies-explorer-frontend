import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useFilterMovies from "../../hook/useFilterMovies";

const SavedMovies = ({loggedIn, savedMovies, onDeleteMovie, filterSavedMovies}) => {
  const [movie, setMovies] = useState([])
  const {handleSearch, handleCheckbox} = useFilterMovies();
  useEffect(() => {
    setMovies(savedMovies)
  }, [savedMovies])

  const handleSearchMovies = (movieName, checked) => {
    const list = handleSearch(savedMovies, movieName);
    const shortList = handleCheckbox(list, checked);
    setMovies(shortList)
  }

  const handleResetSearch = (checked) => {
    const shortList = handleCheckbox(savedMovies, checked);
    setMovies(shortList);
  }

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm onSearch={handleSearchMovies} onResetForm={handleResetSearch}/>
        <MoviesList filterMovies={movie} onDeleteMovie={onDeleteMovie} filterSavedMovies={filterSavedMovies}/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;