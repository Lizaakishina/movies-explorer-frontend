import Footer from "../Footer/Footer";
import Header from "../ProfileHeader/ProfileHeader";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList type="savedMovies"/>
      <Footer />
    </>
  )
}

export default SavedMovies;