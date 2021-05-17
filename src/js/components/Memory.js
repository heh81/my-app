import React, { useState, useEffect } from 'react';
import ButtonFetch from "./ButtonFetch";
import MemoryCard from "./MemoryCards"


const Memory = () => {

    const [card, setCard] = useState(null)
    const API = "data/db.json"

    const handleCard = () => {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Błąd!!!")
            })
            .then(response => response.json())
            .then(data => {
                /////

                let arr = [];
                while (arr.length < 4) {
                    let r = Math.floor(Math.random() * 4) + 1;
                    if (arr.indexOf(r) === -1) arr.push(r);
                }
                let arr2 = [];
                while (arr2.length < 4) {
                    let r = Math.floor(Math.random() * 4) + 1;
                    if (arr2.indexOf(r) === -1) arr2.push(r);
                }

                let randomIndex = [...arr, ...arr2];

                let pair = randomIndex.map(el => {
                    return data.results[el - 1]
                });
                ////
                // console.log(data);
                //  setCard(data.results);
                setCard(pair)
            })
            .catch(error => console.log(error));

    }

    return (

        <div className="container">
            <ButtonFetch click={handleCard} description="Wylosuj grę" />
            {card ? < MemoryCard card={card} /> : card}


        </div>)

}

export default Memory;