import { useState } from "react";

const useOpenPopup = (initialValue) => {
  const [isButtonPopup, setIsButtonMenu] = useState(initialValue);
  const handlePopupClick = () => {
    setIsButtonMenu(state => !state);
  }
  return {handlePopupClick, isButtonPopup};
}

export default useOpenPopup;