import React, { useState, useEffect } from 'react';



const WordDictation = (props) => {
    console.log(props.word);

    const [wordTranslate, setWordTranslate] = useState([])

    const handleChange = (evt) => {
        evt.preventDefault();
        alert(`Wpisz tłumaczenie`)
    }
    console.log(wordTranslate);


    useEffect(() => {
        if (wordTranslate === props.word.translate) setTimeout(window.alert, 1000, "GRATULACJE!");
        if (wordTranslate === props.word.translate) setTimeout(() => setWordTranslate([]), 1500);

    }, [wordTranslate]);


    return (
        <div className="word">
            <div className="wordList-boxes">
                <div className="wordList-box" key={props.word.index}>
                    <img className="wordList-image" src={props.word.address} alt={props.word.word} />
                    <h1 className="wordList-title-en">{props.word.word}</h1>

                    <form onSubmit={handleChange}>
                        <label>
                            Wpisz Tłumaczenie:
        <input
                                type="text"
                                value={wordTranslate}
                                onChange={e => setWordTranslate(e.target.value)}
                            />
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default WordDictation;


