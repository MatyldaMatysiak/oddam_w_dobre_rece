import React from "react";
import WhoWeHelpDisplay from "./WhoWeHelpDisplay";

const localCollections = [
    {
        name: 'Zbiórka 1',
        goal: 'Cel 1',
        items: 'rzeczy 1'
    },
    {
        name: 'Zbiórka  2',
        goal: 'Cel 2',
        items: 'rzeczy 2'
    },
    {
        name: 'Zbiórka  3',
        goal: 'Cel 3',
        items: 'rzeczy 3'
    },

]

export default function LocalCollections() {
    return (
        <WhoWeHelpDisplay institutions={localCollections}/>
    )
}