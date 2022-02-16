import React from "react";
import WhoWeHelpDisplay from "./WhoWeHelpDisplay";

const foundations = [
    {
        name: 'Fundacja “Dbam o Zdrowie”',
        goal: 'Cel i misja: Pomoc osobom znaj dującym się w trudnej sytuacji życiowej.',
        items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        name: 'Fundacja “Dla dzieci”',
        goal: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        items: 'ubrania, meble, zabawki'
    },
    {
        name: 'Fundacja “Bez domu”',
        goal: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja 4',
        goal: 'Cel i misja:',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja 5',
        goal: 'Cel i misja:',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja 6',
        goal: 'Cel i misja:',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja 7',
        goal: 'Cel i misja:',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        name: 'Fundacja 8',
        goal: 'Cel i misja:',
        items: 'Rzeczy'
    },
    {
        name: 'Fundacja 9',
        goal: 'Cel i misja:',
        items: 'ubrania, jedzenie, ciepłe koce'
    }
]

export default function Foundations() {
    return (
        <WhoWeHelpDisplay institutions={foundations}/>
    )
}