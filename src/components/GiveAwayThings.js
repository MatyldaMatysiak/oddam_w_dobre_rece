import React, {useState} from "react";
import HomeContact from "./HomeContact";
import GiveAwayForm from "./GiveAwayForm";
import GiveAwayHeader from "./GiveAwayHeader";

export default function GiveAwayThings({ userData, setUserData }) {
    const [startNotActive] = useState(true)

    return (
        <>
            <GiveAwayHeader userData={userData} setUserData={setUserData} startNotActive={startNotActive}/>
            <GiveAwayForm />
            <HomeContact />
        </>
    )
}