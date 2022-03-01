import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import StepOne from "./StepOne";
import bg from "../assets/Background-Form.jpg"
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import Thanks from "./Thanks";

const stepOneArray = [
    {
        value: "ubrania - które nadają się do ponownego użycia",
        id: "ubrania"
    },
    {
        value: "ubrania - do wyrzucenia",
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

const whoToHelp = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"]

export default function GiveAwayForm() {

    const [stepOne, setStepOne] = useState(stepOneArray[0].value);
    const [stepTwo, setStepTwo] = useState("--wybierz--");
    const [stepThree, setStepThree] = useState({
        location: "--wybierz--",
        whoHelp: [],
        organizationName: ""

    })

    const [stepFour, setStepFour] = useState({
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        day: "",
        hour: "",
        comments: ""
    })

    const sendForm = () => {
        const form = {
            thingsToGive: stepOne,
            bags: stepTwo,
            whoToGive: stepThree,
            pickUpData: stepFour
        }
        console.log(form);


    }

    return (
        <>
            <section className="giveAwayForm">
                <Routes>
                    <Route path="krok-1" element={ <StepOne bg={bg} setStepOne={setStepOne} stepOne={stepOne} stepOneArray={stepOneArray}/> } />
                    <Route path="krok-2" element={ <StepTwo bg={bg} setStepTwo={setStepTwo} stepTwo={stepTwo}/> } />
                    <Route path="krok-3" element={ <StepThree bg={bg} setStepThree={setStepThree} stepThree={stepThree} whoToHelp={whoToHelp}/> } />
                    <Route path="krok-4" element={ <StepFour bg={bg} setStepFour={setStepFour} stepFour={stepFour}/> } />
                    <Route path="podsumowanie"
                           element={ <Summary bg={bg}
                                              stepOne={stepOne}
                                              stepTwo={stepTwo}
                                              stepThree={stepThree}
                                              stepFour={stepFour}
                                              sendForm={sendForm}/> } />
                    <Route path="podziekowanie" element={ <Thanks bg={bg}/> } />
                </Routes>
            </section>
        </>
    )
}