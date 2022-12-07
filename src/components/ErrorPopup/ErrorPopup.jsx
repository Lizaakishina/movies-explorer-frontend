import "./ErrorPopup.css";

const ErrorPopup = ({isOpen, onClose, errorMessage, onCLoseOverlay, isError}) => {
  return (
    <section className={`errorPopup ${isOpen && "errorPopup_opened"}`} onMouseDown={onCLoseOverlay}>
      <div className="errorPopup__container">
        <h2 className="errorPopup__title">{isError && "Ошибка"}</h2>
        <p className="errorPopup__subtitle">{errorMessage}</p>
        <button type="button" className="button errorPopup__button" onClick={onClose}>Ок</button>
      </div>
    </section>
  )
}

export default ErrorPopup;