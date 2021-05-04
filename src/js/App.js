import React, { useEffect, useState } from "react";
// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonFetchWord from "./components/ButtonFetchWord";
import WordsList from "./components/WordsList";
// STYLES
//import '../scss/main.scss';

// DATA
//import GameDataset from './data/dataset';



// APP

const API = "data/db.json"

const App = () => {
    const [word, setWord] = useState(null)

    const handleWordFetch = () => {
        //console.log("klik")
        fetch(API)
            // .then(response => {
            //     if (response.ok) {
            //         return response;
            //     }
            //     throw Error("Błąd!!!")
            // })
            .then(response => response.json())
            .then(data => {
                //  console.log(data);
                setWord(data.results)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="App">

                <Navbar />
                <div style={{ height: "200px" }}> </div>
                <ButtonFetchWord click={handleWordFetch} />
                {word ? < WordsList word={word} /> : word}
                <Footer />
            </div>
        </>
    )
}

export default App;