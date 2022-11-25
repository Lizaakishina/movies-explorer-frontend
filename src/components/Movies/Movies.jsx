import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesList from "../MoviesList/MoviesList";
import Footer from "../Footer/Footer";

const Movies = () => {
    return (
      <>
        <Header logIn={true} />
        <main>
          <SearchForm />
          <MoviesList type="movies"/>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Movies;