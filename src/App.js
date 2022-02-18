import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/*" element={ <Home /> } />
            <Route path="/logowanie" element={ <LoginView /> } />
            <Route path="/rejestracja" element={ <SignUpView /> } />
            <Route path="/wylogowano" element={ <Logout /> } />
        </Routes>
    </Router>
  );
}

export default App;
