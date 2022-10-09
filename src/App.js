import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, wmsg) => {
    setAlert({
      msg: message,
      type: type,
      warningmsg: wmsg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#01012f";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled.", "warning", "Woooh!");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled.", "warning", "Woooh!");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="ConvertTxt" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  mode={mode}
                  showAlert={showAlert}
                  heading="You can paste you text here and convert it into UPPERCASE, lowercase, remove extra spaces and much more."
                />
              }
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
