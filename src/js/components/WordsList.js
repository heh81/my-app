import React from 'react';



const WordsList = (props) => {
    console.log(props.word);



    return (
        <div className="wordList">
            <div className="wordList-boxes">
                <div className="wordList-box" key={props.word.index}>
                    <img className="wordList-image" src={props.word.address} alt={props.word.word} />
                    <h1 className="wordList-title-en">{props.word.word}</h1>
                    <h2 className="wordList-title-pl">{props.word.translate}</h2>

                </div>
            </div>
        </div>
    );
}

export default WordsList;


