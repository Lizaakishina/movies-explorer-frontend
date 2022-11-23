import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";

const Movies = () => {
    return (
      <>
        <Header logIn={true} />
        <main>
          <SearchForm />
        </main>
        <Footer />
      </>
    )
  }
  
  export default Movies;