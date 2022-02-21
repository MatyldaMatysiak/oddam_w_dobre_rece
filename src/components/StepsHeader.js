import React from "react";

export default function StepsHeader({description}) {
    return (
        <header className="stepsHeader">
            <h3 className="stepsHeader__title">Ważne</h3>
            <p className="stepsHeader__description">{description}</p>
        </header>
    )
}