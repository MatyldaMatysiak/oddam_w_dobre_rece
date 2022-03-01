import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

export default function Home({ userData, setUserData }) {
    return (
        <>
            <HomeHeader userData={userData} setUserData={setUserData}/>
            <HomeThreeColumns/>
            <HomeSimpleSteps userData={userData}/>
            <HomeAbout/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    )
}