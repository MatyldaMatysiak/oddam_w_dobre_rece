import React, {useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from "../assets/Icon-Arrow-Up.svg";

export default function StepTwo({bg, setStepTwo, stepTwo}) {

    const [description] = useState("Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.")
    const [imgSrc, setImgSrc] = useState(arrowDown)
    const [options, setOptions] = useState("hide")
    const [selectValue, setSelectValue] = useState(stepTwo)

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
        setStepTwo(e.target.innerText)
    }

    return (
        <>
            <StepsHeader description={description} />
            <main className="giveAwayFormBg step" style={{ backgroundImage: `url(${bg})` }}>
                <form className="stepTwo__form">
                    <p className="stepNumber">2/4</p>
                    <h2 className="form__title">Podaj liczbę 60l worków, w które spakowałeś / aś rzeczy:</h2>
                    <div className="stepTwo__select">
                        <h3 className="form__label" >Liczba 60l worków:</h3>
                        <div className="form__select" id="bags">
                            <p className="select__choose">{selectValue}</p>
                            <img src={imgSrc} alt="arrow down" className="select__arrow" onClick={handleShowSelect}/>
                            {options === "visible" ? <div className="select__options">
                                <p className="options_option" onClick={handleChooseOption}>1</p>
                                <p className="options_option" onClick={handleChooseOption}>2</p>
                                <p className="options_option" onClick={handleChooseOption}>3</p>
                                <p className="options_option" onClick={handleChooseOption}>4</p>
                                <p className="options_option" onClick={handleChooseOption}>5</p>
                            </div> : <></>}
                        </div>


                    </div>
                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-1"><button className="btn btn-active btn-form">Wstecz</button></Link>
                    <Link to="/oddaj-rzeczy/krok-3"><button className="btn btn-active btn-form">Dalej</button></Link>
                </div>
            </main>

        </>
    )
}