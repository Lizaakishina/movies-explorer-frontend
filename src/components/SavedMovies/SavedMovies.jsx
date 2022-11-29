import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
  return (
    <>
      <Header logIn={true}/>
      <main>
        <SearchForm />
        <MoviesList />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;