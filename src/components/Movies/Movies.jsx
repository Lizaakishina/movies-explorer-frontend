import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const Movies = ({loggedIn, onSearch, movies, isLoader, onError, movieErrorMessage}) => {
    return (
      <>
        <Header loggedIn={loggedIn} />
        <main>
          <SearchForm type="movies" onSearch={onSearch} onError={onError}/>
          <MoviesList movies={movies} isLoader={isLoader} movieErrorMessage={movieErrorMessage}/>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Movies;