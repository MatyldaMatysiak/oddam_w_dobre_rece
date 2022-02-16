import React, {useState} from "react";
import OrganizationsVerse from "./OrganizationsVerse";

export default function WhoWeHelpDisplay({ institutions }) {

    const [rowsNumber] =useState(3)
    const [pageNumber] = useState(Math.ceil(institutions.length/rowsNumber))
    const [pageSet, setPageSet] = useState([institutions[0], institutions[1], institutions[2]])

    const handleChangePage = (e) => {
        let startNumber = 0;
        if (e.target.innerText === 1) {
            startNumber = 0;
        } else {
            startNumber = rowsNumber*Number(e.target.innerText - 1);
        }

        let newSet = [];
        for (let i = 0; i < rowsNumber; i++) {
            if (startNumber + i > institutions.length - 1) {
                break;
            } else {
                newSet.push(institutions[startNumber + i])
            }
        }
        setPageSet([...newSet]);

        const pageButtons = document.querySelectorAll(".pageNumbers button")
        pageButtons.forEach(button => button.classList.remove("btn-active"))
        const activeButton = e.target
        activeButton.classList.add("btn-active");
    }

    const pages = () => {
        if (pageNumber <= 1) {
            return <button className="btn btn-hidden" key={0}>0</button>;
        } else {
            let numbers = []
            for (let i = 1; i <= pageNumber; i++) {
                if (i === 1) {
                    numbers.push(<button className="btn btn-active" key={i} onClick={handleChangePage}>{i}</button>)
                } else {
                    numbers.push(<button className="btn" key={i} onClick={handleChangePage}>{i}</button>)
                }
            }
            return numbers
        }

    }

    return (
        <>
            <div className="helpPage">
                {pageSet.map(verse => <OrganizationsVerse verse={verse} key={verse.name}/>)}
            </div>

            <div className="pageNumbers">
                {pages()}
            </div>
        </>
    )
}