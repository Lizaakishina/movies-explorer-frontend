import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Movies = ({loggedIn, onSearch, filterMovies, savedMovies, isLoader, onError, movieErrorMessage, onCreateMovie, onDeleteMovie}) => {

  useEffect(() => {
    onSearch(sessionStorage.getItem('moviesName'))
  }, [])
    return (
      <>
        <Header loggedIn={loggedIn} />
        <main>
          <SearchForm type="movies" onSearch={onSearch} onError={onError}/>
          <MoviesList
            savedMovies={savedMovies}
            filterMovies={filterMovies}
            isLoader={isLoader}
            movieErrorMessage={movieErrorMessage}
            onCreateMovie={onCreateMovie}
            onDeleteMovie={onDeleteMovie}
          />
        </main>
        <Footer />
      </>
    )
  }
  
  export default Movies;