import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";

const Movies = () => {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <Footer />
    </section>
  )
}

export default Movies;