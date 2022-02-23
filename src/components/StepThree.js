import React, {useEffect, useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from "../assets/Icon-Arrow-Up.svg";

export default function StepThree({bg, stepThree, setStepThree, whoToHelp}) {

    const [description] = useState("Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.")
    const [imgSrc, setImgSrc] = useState(arrowDown)
    const [options, setOptions] = useState("hide")
    const [selectValue, setSelectValue] = useState(stepThree.location);
    const [input, setInput] = useState(stepThree.organizationName);
    const [validation, setValidation] = useState({location: true, whoToHelp: true})

    const handleShowSelect = () => {
        if (options === "hide") {
            setImgSrc(arrowUp);
            setOptions("visible")
        } else {
            setImgSrc(arrowDown);
            setOptions("hide")
        }

    }

    const handleChooseOption = (e) => {
        setSelectValue(e.target.innerText);
        setOptions("hide");
        setImgSrc(arrowDown);
        setStepThree(prev => {
            return {
                ...prev,
                location: e.target.innerText
            }
        })
        setValidation(prev => {
            return {
                ...prev,
                location: true
            }
        })
    }

    const handleCheckbox = (e) => {
        if (stepThree.whoHelp.includes(e.target.innerText)) {
            let newWhoHelp = [...stepThree.whoHelp];
            newWhoHelp.splice(newWhoHelp.indexOf(e.target.innerText, 1));
            setStepThree(prev => {
                return {
                    ...prev,
                    whoHelp: newWhoHelp
                }
            })
        } else {
            let newWhoHelp = [...stepThree.whoHelp, e.target.innerText]
            setStepThree(prev => {
                return {
                    ...prev,
                    whoHelp: newWhoHelp
                }
            })
            setValidation(prev => {
                return {
                    ...prev,
                    whoToHelp: true
                }
            })
        }

    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
        if (input.length !== 0) {
            setValidation(prev => {
                return {
                    ...prev,
                    location: true
                }
            })
        }
    }

    const handleSaveInput = (e) => {
        console.log("hey")
        setStepThree(prev => {
            return {
                ...prev,
                organizationName: input
            }
        })
    }

    const handleValidation = (e) => {
        if (selectValue === "--wybierz--" && input.length === 0) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    location: false
                }
            })
        }

        if (stepThree.whoHelp.length === 0) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    whoToHelp: false
                }
            })
        }
    }

    return (
        <>
            <StepsHeader description={description} />
            <main className="giveAwayFormBg step" style={{ backgroundImage: `url(${bg})` }}>
                <form className="stepThree__form">
                    <p className="stepNumber">3/4</p>
                    <h2 className="form__title">Lokalizacja:</h2>
                    <div className="stepThree__select">
                        <div className={`form__select ${validation.location ? "" : "invalid"} form__selectThree`} id="bags">
                            <p className="select__choose">{selectValue}</p>
                            <img src={imgSrc} alt="arrow down" className="select__arrow" onClick={handleShowSelect}/>
                            {options === "visible" ? <div className="select__optionsThree">
                                <p className="options_option" onClick={handleChooseOption}>Poznań</p>
                                <p className="options_option" onClick={handleChooseOption}>Warszawa</p>
                                <p className="options_option" onClick={handleChooseOption}>Kraków</p>
                                <p className="options_option" onClick={handleChooseOption}>Wrocław</p>
                                <p className="options_option" onClick={handleChooseOption}>Katowice</p>
                            </div> : <></>}
                        </div>
                    </div>
                    {!validation.location ? <p className="stepThree__validationText">Wybierz lokalizację lub wpisz nazwę organizacji poniżej!</p> : <></>}
                    <div className="form__checkbox">
                        <h3 className="checkbox__title stepThreeForm__secondaryTitle">Komu chcesz pomóc?</h3>
                        <div className="checkbox__options">
                            {whoToHelp.map(element => <p key={element} className={`options__option ${stepThree.whoHelp.includes(element) ? "option-yellow" : ""}`} onClick={handleCheckbox}>{element}</p>)}
                        </div>
                        {!validation.whoToHelp ? <p className="stepThree__validationText">Wybierz conajmniej jedną opcję!</p> : <></>}
                    </div>
                    <div className="form__organizationName">
                        <label htmlFor="chosen-organization" className="organizationName__title stepThreeForm__secondaryTitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type="text" id="chosen-organization" name="chosen-organization" className="organizationName" value={input} onChange={handleInputChange} onBlur={handleSaveInput}/>
                    </div>
                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-2"><button className="btn btn-active btn-form">Wstecz</button></Link>
                    <Link to="/oddaj-rzeczy/krok-4" onClick={handleValidation}><button className="btn btn-active btn-form">Dalej</button></Link>
                </div>
            </main>
        </>
    )
}