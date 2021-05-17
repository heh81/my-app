import React, { useState } from "react";
import ButtonFetch from "./ButtonFetch";
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

        <div>
            <ButtonFetch click={handleWord} description="Wylosuj słówko" />
            {word ? < WordsList word={word} /> : word}


        </div>)

}


export default Start;