import { useState } from "react";

const useOpenPopup = (initialValue) => {
  const [isButtonMenu, setIsButtonMenu] = useState(initialValue);
  const handleMenuClick = () => {
    setIsButtonMenu(state => !state);
  }
  return {handleMenuClick, isButtonMenu};
}

export default useOpenPopup;