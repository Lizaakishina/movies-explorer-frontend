import { useState } from "react";

const useOpenPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  function handleOpenPopup (message) {
    setIsOpen(true);
    setErrorMessage(message);
    document.addEventListener("keydown", handleEscClose);
  }

  function handleClosePopup () {
    document.removeEventListener("keydown", handleEscClose);
    setIsOpen(false);
    setTimeout(() => {setErrorMessage('');}, "500");
  }

  function handleCLoseOverlay (e) {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  }

  function handleEscClose (e) {
    e.key === "Escape" && handleClosePopup();
  }

  return {handleOpenPopup, handleClosePopup, handleCLoseOverlay, isOpen, errorMessage};
}

export default useOpenPopup;