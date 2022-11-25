import "./Fieldset.css";

const Fieldset = ({input, inputClass, placeholder, errorMessage}) => {
  const isValid = false;
  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{placeholder}</legend>
      <input type={input} className={`form__input_type_${inputClass} form__input  ${!isValid && 'form__input_type_error'}`} required/>
      <span className={`form__input-error ${!isValid && 'form__input-error_active'}`}>{errorMessage}</span>
    </fieldset>
  )
}

export default Fieldset;