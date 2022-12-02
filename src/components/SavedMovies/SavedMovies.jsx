import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const SavedMovies = ({loggedIn, savedMovies, onDeleteMovie}) => {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm />
        <MoviesList filterMovies={savedMovies} onDeleteMovie={onDeleteMovie}/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;