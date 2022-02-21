import React, {useState} from "react";
import OrganizationsVerse from "./OrganizationsVerse";

export default function WhoWeHelpDisplay({ institutions }) {

    const [rowsNumber] =useState(3);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumber] = useState(Math.ceil(institutions.length/rowsNumber))
    const [pageSet, setPageSet] = useState([institutions[0], institutions[1], institutions[2]])

    const handleChangePage = (e) => {

        const clickedPage = Number(e.target.innerText);
        const lastIndex = clickedPage*rowsNumber;
        const firstIndex = lastIndex - rowsNumber;
        const newSet = institutions.slice(firstIndex, lastIndex)

        setCurrentPage(Number(e.target.innerText))
        setPageSet([...newSet]);
    }

    const pages = () => {
        if (pageNumber <= 1) {
            return <button className="btn btn-hidden" key={0}>0</button>;
        } else {
            let numbers = []
            for (let i = 1; i <= pageNumber; i++) {
                numbers.push(<button className={`btn ${currentPage === i ? "btn-active" : ""}`} key={i} onClick={handleChangePage}>{i}</button>)
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