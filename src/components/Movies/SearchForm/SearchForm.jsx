import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useSearchMovies } from "../../../hook/useSearchMovies";

const SearchForm = ({type, onSearch, onError}) => {
  const {handleChange, handleSearch, nameOfMovie} = useSearchMovies(type)

  function handleSearchMovie (e) {
    handleSearch(e);
    if (!!nameOfMovie) {
      onSearch(e, nameOfMovie);
    } else {
      onError("Нужно ввести ключевые слова")
    }
  }

  return (
    <div className="searchForm">
      <form className="searchForm__form" name="searchForm" onSubmit={handleSearchMovie} noValidate>
        <fieldset className="searchForm__fieldset">
          <label htmlFor="search" className="searchForm__label">
          <input 
              type="text"
              className="searchForm__input"
              placeholder="Фильм"
              id="search"
              name="movie"
              onChange={handleChange}
              value={nameOfMovie}
              required
            />
          </label>
        </fieldset>
        <button className="button button_type_search">Поиск</button>
      </form>
      <FilterCheckbox />
      <div className="searchForm__line"></div>
    </div>
  )
}

export default SearchForm; 