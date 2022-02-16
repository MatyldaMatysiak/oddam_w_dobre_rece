import React, {useState} from "react";
import {Routes} from "react-router-dom";

export default function WhoWeHelpDisplay({ institutions }) {

    const [listLength] = useState(institutions.length)

    return (
        <>
            <Routes>
                {/*{for (let i = 1; i <= listLength/3; i++) {*/}

                {/*}}*/}
            </Routes>
        </>
    )
}