import React from "react";
import WhoWeHelpDisplay from "./WhoWeHelpDisplay";

const organisations = [
    {
        name: 'Organizacja 1',
        goal: 'Cel 1',
        items: 'rzeczy 1'
    },
    {
        name: 'Organizacja 2',
        goal: 'Cel 2',
        items: 'rzeczy 2'
    },
    {
        name: 'Organizacja 3',
        goal: 'Cel 3',
        items: 'rzeczy 3'
    },
    {
        name: 'Organizacja 4',
        goal: 'Cel 4',
        items: 'rzeczy 4'
    },
    {
        name: 'Organizacja 5',
        goal: 'Cel 5',
        items: 'rzeczy 5'
    },
    {
        name: 'Organizacja 6',
        goal: 'Cel 6',
        items: 'rzeczy 6'
    },
]

export default function Foundations() {
    return (
        <WhoWeHelpDisplay institutions={organisations}/>
    )
}