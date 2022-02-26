import React from "react";
import HomeContact from "./HomeContact";
import GiveAwayForm from "./GiveAwayForm";
import GiveAwayHeader from "./GiveAwayHeader";

export default function GiveAwayThings({ userData, setUserData }) {
    return (
        <>
            <GiveAwayHeader userData={userData} setUserData={setUserData}/>
            <GiveAwayForm />
            <HomeContact />
        </>
    )
}