import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg py-3 py-lg-0 px-lg-5">
    <a href="index.html" className="navbar-brand d-block d-lg-none">
      <h1 className="font-secondary mb-n2">
        Groom <span className="text-primary">&</span> Bride
      </h1>
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
      className="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent"
    >
      <div className="navbar-nav ml-auto py-0">
        <a href="/" className=" nav-item nav-link active">
          <b>HOME</b>
        </a>
        <a href="#thebrideandgroom" className=" nav-item nav-link active">
          <b>ABOUT</b>
        </a>
        <a href="#story" className=" nav-item nav-link active">
          <b>STORY</b>
        </a>
        <a href="#weddingparty" className=" nav-item nav-link active">
          <b>PARTY</b>
        </a>
      </div>
      <a  className="navbar-brand mx-5 d-none d-lg-block">
        <h1 className="font-secondary  mb-n2" style={{color:"#34c7a9",fontWeight:"bold", fontSize:"30px", paddingTop:"10px"}}>
          DasBabu <span style={{color:"gray"}} >&</span> Nikitha
        </h1>
      </a>
      <div className="navbar-nav mr-auto py-0">
        <a href="#family" className=" nav-item nav-link active">
          <b>FAMILY</b>
        </a>
        <a href="#weddingdetails" className=" nav-item nav-link active">
          <b>DETAILS</b>
        </a>
        <a href="/bride" className=" nav-item nav-link active">
          <b>BRIDE</b>
        </a>
        <a href="/groom" className=" nav-item nav-link active">
          <b>GROOM</b>
        </a>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
