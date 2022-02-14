import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/logowanie" element={ <Home /> } />
            <Route path="/rejestracja" element={ <Home /> } />
            <Route path="/wylogowano" element={ <Home /> } />
        </Routes>
    </Router>
  );
}

export default App;
