import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode}`}
        style={{
          backgroundColor:
            props.mode === "blue"
              ? "#89CFF0"
              : props.mode === "green"
              ? "#90EE90"
              : props.mode === "red"
              ? "#D22730"
              : props.mode === "yellow"
              ? "#cfcf4e"
              : props.mode === "light"
              ? "#white"
              : "gray",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            TextUtils
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
                  className="nav-link active"
                  aria-current="page"
                  to="#"
                  style={{ color: props.mode === "light" ? "black" : "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: props.mode === "light" ? "black" : "white" }}
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="btn-modes">
              <div className="btn-group">
                <button type="button" id="mainBtn" className={`btn btn-${props.mode==='light'?'light':props.mode==='dark'?'secondary':props.mode==='blue'?'primary':props.mode==='green'?'success':props.mode==='red'?'danger':props.mode==='yellow'?'warning':'secondary'}`}>
                  Light
                </button>
                <button
                  type="button"
                  className={`btn btn-${props.mode==='light'?'light':props.mode==='dark'?'secondary':props.mode==='blue'?'primary':props.mode==='green'?'success':props.mode==='red'?'danger':props.mode==='yellow'?'warning':'secondary'} dropdown-toggle dropdown-toggle-split`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="btn dropdownbtn" id="light" onClick={props.changeMode}>Light</button>
                  </li>
                    <li>
                    <button className="btn dropdownbtn" id="dark" onClick={props.changeMode}>Dark</button>
                  </li>
                  <li>
                  <button className="btn dropdownbtn" id="blue" onClick={props.changeMode}>Blue</button>
                  </li>
                  <li>
                  <button className="btn dropdownbtn" id="red" onClick={props.changeMode}>Red</button>
                  </li>
                  <li>
                  <button className="btn dropdownbtn" id="green" onClick={props.changeMode}>Green</button>
                  </li>
                  <li>
                  <button className="btn dropdownbtn" id="yellow" onClick={props.changeMode}>Yellow</button>
                  </li>                 
                </ul>
              </div>
            </div>

            <div className=" btn-modes1">
              <button
                type="button"
                className="btn btn-primary"
                id="blue"
                onClick={props.colorMode}
              />
              <button
                type="button"
                className="btn btn-success"
                id="green"
                onClick={props.colorMode}
              />
              <button
                type="button"
                className="btn btn-danger"
                id="red"
                onClick={props.colorMode}
              />
              <button
                type="button"
                className="btn btn-warning"
                id="yellow"
                onClick={props.colorMode}
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >{`Enable ${
                props.mode === "dark" ? "light" : "dark"
              } mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
