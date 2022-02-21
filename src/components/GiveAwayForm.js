import React from "react";
import {Route, Routes} from "react-router-dom";
import StepOne from "./StepOne";
import bg from "../assets/Background-Form.jpg"

export default function GiveAwayForm() {
    return (
        <>
            <section className="giveAwayForm">
                <Routes>
                    <Route path="krok-1" element={ <StepOne bg={bg}/> } />
                    <Route path="krok-2" element={ <StepOne /> } />
                    <Route path="krok-3" element={ <StepOne /> } />
                    <Route path="krok-4" element={ <StepOne /> } />
                </Routes>
            </section>
        </>
    )
}