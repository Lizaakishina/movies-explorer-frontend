import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
  <div className="filterCheckbox">
    <label className="filterCheckbox__switch" htmlfor="checkbox">
      <input type="checkbox" id="checkbox" className="filterCheckbox__input"/>
      <div className="filterCheckbox__slider"></div>
    </label>
    Короткометражки
  </div>
  )
}

export default FilterCheckbox;