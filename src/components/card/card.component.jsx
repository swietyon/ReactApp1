import React from "react";
import "./card.styles.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" className="image" src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>

        </div>
    )  
}