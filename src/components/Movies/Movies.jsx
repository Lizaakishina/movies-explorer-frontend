import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const Movies = ({onSearch, isLoader, movies, onError, movieErrorMessage}) => {
    return (
      <>
        <Header logIn={true} />
        <main>
          <SearchForm type="movies" onSearch={onSearch} onError={onError}/>
          <MoviesList isLoader={isLoader} movies={movies} movieErrorMessage={movieErrorMessage}/>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Movies;