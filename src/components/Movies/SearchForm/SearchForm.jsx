import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <div className="searchForm">
      <form className="searchForm__form" name="searchForm">
        <fieldset className="searchForm__fieldset">
          <label htmlfor="search" className="searchForm__label">
            <input type="text" className="searchForm__input" placeholder="Фильм" id="search" required/>
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