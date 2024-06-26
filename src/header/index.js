import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import {
  logotext,
  dataabout,
} from "../content_option";
import Themetoggle from "../components/themetoggle";
import { Link } from "react-scroll";
import { FiExternalLink } from "react-icons/fi";


const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handlePDFClick = () => {
    window.open(dataabout.resume, "_blank");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="navbar-brand nav_ac" to="/">
            {logotext}
          </div>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscGrabber /> : <VscClose />}
            </button>
          </div>
        </div>


        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                  {isActive && (
                    <li className="menu_item">
                      <div className="pdf__button" onClick={handlePDFClick} style={{ fontSize: "1.5rem", marginTop: "2rem", display: "flex", alignItems: "center", cursor: "pointer" }}>
                        <span style={{ marginRight: "0.5rem" }}>View Resume</span>
                        <FiExternalLink size={"2rem"} />
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer position-absolute w-100 p-3">
            {/* <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div> */}
            <p className="m-0" style={{ textAlign: "center" }}>
              {/* Added inline style to center-align the text */}
              &copy; {new Date().getFullYear()} {logotext}. All Rights Reserved.
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
