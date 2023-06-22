import React, { useEffect, useState, useContext } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { AppContext } from "../../AppContext";


const Themetoggle = () => {
  const { setIsDarkMode } = useContext(AppContext);
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
    console.log('themetoggle:'+ theme);
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
    console.log('useEffect:'+ theme);
    setIsDarkMode(theme === "dark" ? true : false);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
