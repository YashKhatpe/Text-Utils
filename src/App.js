import React, { useState } from "react";
import Navbar from "./Navbar";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "secondary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "light");
    }
  };

  const colorMode = (event) => {
    const btnId = event.target.id;
    switch (btnId) {
      case "light":
        setMode("light");
        document.body.style.backgroundColor = "white";
        break;
      case "dark":
        setMode("dark");
        document.body.style.backgroundColor = "black";
        break;
      case "blue":
        setMode("blue");
        showAlert("Blue Mode Enabled", "primary");
        document.body.style.backgroundColor = "#0d6efd";
        break;
      case "green":
        setMode("green");
        showAlert("Green Mode Enabled", "success");
        document.body.style.backgroundColor = "#198754";
        break;
      case "red":
        setMode("red");
        document.body.style.backgroundColor = "#dc3545";
        showAlert("Red Mode Enabled", "danger");
        break;
      case "yellow":
        setMode("yellow");
        document.body.style.backgroundColor = "#ffc107";
        showAlert("Yellow Mode Enabled", "warning");
        break;

      default:
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Default Executed", "danger");
        break;
    }
  };

  // const [navColor, setNavColor] = useState("white");

  // const handleNavColor = (color) => {
  //   setNavColor(color);
  // };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeMode = (event)=> {
    const color = event.target.id;
    console.log(color);
    const newColor = color.charAt(0).toUpperCase() + color.slice(1); 
    document.getElementById('mainBtn').innerHTML = newColor;
    setMode(color);
    console.log(mode);
    switch (color) {
      case "light":
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled", "light");
        break;
        case "dark":
          setMode("dark");
          document.body.style.backgroundColor = "black";
          showAlert("Light Mode Enabled", "dark");
        break;
      case "blue":
        setMode("blue");
        showAlert("Blue Mode Enabled", "primary");
        document.body.style.backgroundColor = "#0d6efd";
        break;
      case "green":
        setMode("green");
        showAlert("Green Mode Enabled", "success");
        document.body.style.backgroundColor = "#198754";
        break;
      case "red":
        setMode("red");
        document.body.style.backgroundColor = "#dc3545";
        showAlert("Red Mode Enabled", "danger");
        break;
      case "yellow":
        setMode("yellow");
        document.body.style.backgroundColor = "#ffc107";
        showAlert("Yellow Mode Enabled", "warning");
        break;

      default:
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Default Executed", "danger");
        break;
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} colorMode={colorMode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} showAlert={showAlert}/>}/>
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
