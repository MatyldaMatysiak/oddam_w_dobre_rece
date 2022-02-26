import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import Logout from "./components/Logout";
import GiveAwayThings from "./components/GiveAwayThings";
import { auth } from "./firebaseConfig";

function App() {

  const [userData, setUserData] = useState({
      email: ""
  });

  console.log(userData)

  useEffect(() => {
      const user = auth.currentUser;
      console.log(user)
      if (user) {
          setUserData(prev => {
              return {
                  ...prev,
                  email: user.email
              }
          })
      }
  }, [])

  return (
    <Router>
        <Routes>
            <Route path="/*" element={ <Home userData={userData} setUserData={setUserData}/> } />
            <Route path="/logowanie" element={ <LoginView setUserData={setUserData}/> } />
            <Route path="/rejestracja" element={ <SignUpView setUserData={setUserData}/> } />
            <Route path="/wylogowano" element={ <Logout /> } />
            <Route path="/oddaj-rzeczy/*" element={ <GiveAwayThings userData={userData} setUserData={setUserData}/> } />
        </Routes>
    </Router>
  );
}

export default App;
