import React, { useState } from 'react';
import WordDictation from "./WordsDictation";
import ButtonFetch from "./ButtonFetch"


const Dictation = () => {

    const [wordDictation, setWordDictation] = useState(null)
    const API = "data/db.json"

    const handleWordDictation = () => {
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
                setWordDictation(data.results[wynikLosowania])
            })
            .catch(error => console.log(error));
    }

    return (

        <div >
            <ButtonFetch click={handleWordDictation} description="Wylosuj słówko" />
            {wordDictation ? < WordDictation word={wordDictation} /> : wordDictation}
        </div>
    )
}

export default Dictation;