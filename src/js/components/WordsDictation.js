import React, { useState, useEffect } from 'react';



const WordDictation = (props) => {

    const [wordTranslate, setWordTranslate] = useState([])

    const handleChange = (evt) => {
        evt.preventDefault();
        if (wordTranslate === props.word.word) {
            setTimeout(window.alert, 1000, "GRATULACJE!");
            setTimeout(() => setWordTranslate([]), 1500);
        } else {
            alert(`Wpisz poprawne tłumaczenie`);
            setTimeout(() => setWordTranslate([]), 500);
        };

    }


    const bar = () => {
        if (wordTranslate === props.word.word)
            setTimeout(window.alert, 1000, "GRATULACJE!");
        if (wordTranslate === props.word.word)
            setTimeout(() => setWordTranslate([]), 1500);
    };

    useEffect(bar, [wordTranslate, props.word.word]);

    return (
        <div className="word ">
            <div className="wordList-boxes">
                <div className="wordList-box" key={props.word.index}>
                    <img className="wordList-image" src={props.word.address} alt={props.word.word} />
                    <h1 className="wordList-title-en">{props.word.translate}</h1>

                    <form className="wordList-form" onSubmit={handleChange}>
                        <label>
                            Wpisz Tłumaczenie:
        <input className="wordList-translate"
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


