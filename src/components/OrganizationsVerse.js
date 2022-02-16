import React from "react";

export default function OrganizationsVerse({verse}) {
    return (
        <div className="helpPage__organisation">
            <div className="organisation__description">
                <h4 className="description__title">{verse.name}</h4>
                <p className="description__text">{verse.goal}</p>
            </div>
            <p className="organisation__thingsToGather">{verse.items}</p>
        </div>
    )
}