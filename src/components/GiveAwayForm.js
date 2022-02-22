import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import StepOne from "./StepOne";
import bg from "../assets/Background-Form.jpg"
import StepTwo from "./StepTwo";

const stepOneArray = [
    {
        value: "ubrania, które nadają się do ponownego użycia",
        id: "ubrania"
    },
    {
        value: "ubrania, do wyrzucenia",
        id: "ubrania2"
    },
    {
        value: "zabawki",
        id: "zabawki"
    },
    {
        value: "książki",
        id: "książki"
    },
    {
        value: "inne",
        id: "inne"
    }
]

export default function GiveAwayForm() {

    const [stepOne, setStepOne] = useState(stepOneArray[0].value);
    const [stepTwo, setStepTwo] = useState("--wybierz--");
    const [stepFour, setStepFour] = useState({})

    console.log(stepOne)

    return (
        <>
            <section className="giveAwayForm">
                <Routes>
                    <Route path="krok-1" element={ <StepOne bg={bg} setStepOne={setStepOne} stepOne={stepOne} stepOneArray={stepOneArray}/> } />
                    <Route path="krok-2" element={ <StepTwo bg={bg} setStepTwo={setStepTwo} stepTwo={stepTwo}/> } />
                    <Route path="krok-3" element={ <StepOne /> } />
                    <Route path="krok-4" element={ <StepOne /> } />
                    <Route path="podsumowanie" element={ <StepOne /> } />
                </Routes>
            </section>
        </>
    )
}