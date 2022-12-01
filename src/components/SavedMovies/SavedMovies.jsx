import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const SavedMovies = ({loggedIn}) => {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm />
        <MoviesList />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;