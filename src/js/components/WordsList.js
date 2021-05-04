import React from 'react';



const WordsList = (props) => {
    console.log(props.word);

    const word = props.word.map(word => (
        <div key={word.index}>
            <h4>{`${word.word} `}</h4>
            <img src={word.address} alt={word.word} />
            <h4>{`${word.translate} `}</h4>

        </div>
    ))
    return (
        <div className="word">
            {word}
        </div>
    );
}

export default WordsList;


