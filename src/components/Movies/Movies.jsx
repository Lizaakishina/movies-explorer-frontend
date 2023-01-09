import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const Movies = ({loggedIn, onSearch, filterMovies, savedMovies, isLoader, onError, movieErrorMessage, onCreateMovie, onDeleteMovie, isShort, onChange}) => {

    return (
      <>
        <Header loggedIn={loggedIn} />
        <main>
          <SearchForm type="movies" onSearch={onSearch} onError={onError} isShort={isShort} onChange={onChange} isLoader={isLoader}/>
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