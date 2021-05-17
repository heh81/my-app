import React from 'react';


const ButtonFetchCard = props => {

    return (
        <button className="button" onClick={props.click}>{props.description}</button>
    )
}

export default ButtonFetchCard;