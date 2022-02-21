import React, {useState} from "react";
import StepsHeader from "./StepsHeader";

export default function StepOne() {

    const [description] = useState("Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.")

    return (
        <>
            <StepsHeader description={description} />
        </>
    )
}