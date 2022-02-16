import React, {useState} from "react";

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
        setPageSet([institutions[startNumber], institutions[startNumber + 1], institutions[startNumber + 2]]);

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
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{pageSet[0].name}</h4>
                        <p className="description__text">{pageSet[0].goal}</p>
                    </div>
                    <p className="organisation__thingsToGather">{pageSet[0].items}</p>
                </div>
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{pageSet[1].name}</h4>
                        <p className="description__text">{pageSet[1].goal}</p>
                    </div>
                    <p className="organisation__thingsToGather">{pageSet[1].items}</p>
                </div>
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{pageSet[2].name}</h4>
                        <p className="description__text">{pageSet[2].goal}</p>
                    </div>
                    <p className="organisation__thingsToGather">{pageSet[2].items}</p>
                </div>
            </div>

            <div className="pageNumbers">
                {pages()}
            </div>
        </>
    )
}