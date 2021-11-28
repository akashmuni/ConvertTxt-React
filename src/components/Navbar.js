import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //background change color picker
  // const handleColorChange = ()=>{
  //   let v = document.getElementById('colorpicker').value;
  //   document.body.style.backgroundColor = v;
  // }

  // $(document).ready(function(){
  //   $('ul li a').click(function(){
  //     $('li a').removeClass("active");
  //     $(this).addClass("active");
  // });
  // });

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}`}
        style={{ backgroundColor: props.mode === "light" ? "#eee" : "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>
              Convert<span style={{ color: "red" }}>Txt</span>
            </b>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="home"
                  aria-current="page"
                  to="/"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="about"
                  to="/about"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  About
                </Link>
              </li>
            </ul>
            {/* background chnage color picker */}
            {/* <div className="d-flex mx-4">
            <input id="colorpicker" type="color" value="#ff0080" onChange={handleColorChange}/>
          </div> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {""} Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
