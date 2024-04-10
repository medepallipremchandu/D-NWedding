import React from "react";
import "./Navbar.css";
import logo from "../images/logo192.png"
import dn from "../images/dn.png"
function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg  justify-content-center">
      <div className="container">
        <a className="navbar-brand" >
        <img src={dn} width="150px" alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                <b>HOME</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  " aria-current="page" href="#thebrideandgroom">
              <b>THE BRIDE AND GROOM</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#weddingparty">
              <b>THE WEDDING PARTY</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#weddingdetails">
              <b>WEDDING DETAILS</b>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/gallery"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>GALLERY</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/bride">
                    BRIDE GALLERY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/groom">
                    GROOM GALLERY
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
