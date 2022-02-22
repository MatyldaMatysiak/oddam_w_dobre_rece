import React, {useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";



export default function StepOne({bg, setStepOne, stepOne, stepOneArray}) {

    const [description] = useState("Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.")


    const handleToggleChecked = (e) => {
        setStepOne(e.target.value)
    }

    return (
        <>
            <StepsHeader description={description} />
            <main className="giveAwayFormBg step" style={{ backgroundImage: `url(${bg})` }}>
                <form className="stepOne__form">
                    <p className="stepNumber">1/4</p>
                    <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                    {stepOneArray.map(thing => <div className="form__option" key={thing.id}>
                        <input type="radio" id={thing.id} name="thingsToGive" value={thing.value} defaultChecked={stepOne === thing.value} onChange={handleToggleChecked}/>
                        <label  className="form__label" htmlFor={thing.id}>{thing.value}</label>
                    </div>) }
                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-2"><button className="btn btn-active btn-form">Dalej</button></Link>
                </div>
            </main>

        </>
    )
}