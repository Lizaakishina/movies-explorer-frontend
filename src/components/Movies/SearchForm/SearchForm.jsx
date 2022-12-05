import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useSearchMovies } from "../../../hook/useSearchMovies";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const SearchForm = ({type, onSearch, onError, isShort, onResetForm}) => {
  const [checked, setChecked] = useState(false);
  const {handleChange, handleSetItem, nameMovie} = useSearchMovies(type)
  const url = useLocation();

  function handleSearchMovie (e) {
    e.preventDefault();
    if (url.pathname === '/movies') {
      handleSetItem(); 
      sessionStorage.setItem('checkbox', checked)
    };

    if (!!nameMovie) {
      onSearch(nameMovie, checked);
    } else {
      url.pathname === '/movies'
      ? onError("Нужно ввести ключевык слова", true)
      : onResetForm(checked);
    }
  }

  const handleChangeChecked = (checked) => {
    setChecked(checked);
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
              value={nameMovie}
              required
            />
          </label>
        </fieldset>
        <button className="button button_type_search">Поиск</button>
      </form>
      <FilterCheckbox onChangeChecked={handleChangeChecked} isShort={isShort}/>
      <div className="searchForm__line"></div>
    </div>
  )
}

export default SearchForm; 