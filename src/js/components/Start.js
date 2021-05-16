import React, { useState } from "react";
import ButtonFetchWord from "./ButtonFetchWord";
import WordsList from "./WordsList";

const Start = () => {
    const [word, setWord] = useState(null)
    const API = "data/db.json"

    const handleWord = () => {
        // console.log("klik")
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Błąd!!!")
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const wynikLosowania = Math.floor(Math.random() * 3);
                setWord(data.results[wynikLosowania])
            })
            .catch(error => console.log(error));
    }
    return (

        <>
            <ButtonFetchWord click={handleWord} />
            {word ? < WordsList word={word} /> : word}


        </>)

}


export default Start;