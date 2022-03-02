import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/Home";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import Logout from "./components/Logout";
import GiveAwayThings from "./components/GiveAwayThings";
import {auth} from "./firebaseConfig";
import {onAuthStateChanged} from "firebase/auth";
import UserPanel from "./components/UserPanel";

function App() {
    const [userData, setUserData] = useState({
        email: ""
    });

    const [startNotActive] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserData(prev => {
                    return {
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        uid: user.uid
                    }
                })
            } else {
                setUserData(prev => {
                    return {
                        ...prev,
                        email: ""
                    }
                })
            }
        });
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Home userData={userData} setUserData={setUserData}/>}/>
                <Route path="/logowanie" element={<LoginView setUserData={setUserData} startNotActive={startNotActive}/>}/>
                <Route path="/rejestracja" element={<SignUpView setUserData={setUserData} startNotActive={startNotActive}/>}/>
                <Route path="/wylogowano" element={<Logout startNotActive={startNotActive}/>}/>
                <Route path="/oddaj-rzeczy/*"
                       element={<GiveAwayThings userData={userData} setUserData={setUserData} startNotActive={startNotActive}/>}/>
                <Route path="/panel" element={<UserPanel userData={userData} setUserData={setUserData} startNotActive={startNotActive}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
