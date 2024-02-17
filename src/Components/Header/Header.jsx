import "./Header.scss";
import React from "react";
import Logo__img from "../Img/logo__img.svg";
import Logo from "../Img/logo.png";
import Btn from "../Img/header__btn.png";

export default function Header() {
  const xref = React.useRef();
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="logo__link" href="#">
            <img src={Logo__img} alt="logo" width={31} height={31} />
            <img src={Logo} alt="img" width={91} height={31} />
          </a>

          <nav className="nav">
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Blog
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Agency
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Featured
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#">
                Price
              </a>
            </li>
          </nav>

          <button
            className="header__btn"
            ref={xref}
            onClick={() => {
              xref.current.classList.add("modal");
            }}
          >
            <img src={Btn} alt="img" width={30} height={14} />
          </button>

          <div className="modals " ref={xref}>
            <button onClick={() => { xref.current.classList.remove("modal") }}>X</button>
          </div>
        </div>
      </header>
    </>
  );
}
