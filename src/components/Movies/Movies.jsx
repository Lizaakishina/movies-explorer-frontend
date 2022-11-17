import Header from "../ProfileHeader/ProfileHeader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";

const Movies = () => {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList type="movies"/>
      <Footer />
    </section>
  )
}

export default Movies;