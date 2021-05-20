import React, { useState, useEffect } from 'react';


const MemoryCard = (props) => {
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);

    console.log(props);
    const pairOfCard = [...props.card];

    function flipCard(index) {
        setOpenedCard((opened) => [...opened, index]);
    }

    const foo = () => {
        if (openedCard < 2) return;
        const firstMatched = pairOfCard[openedCard[0]];
        const secondMatched = pairOfCard[openedCard[1]];

        if (firstMatched === secondMatched)
            setMatched([...matched, firstMatched.index]);
        console.log(firstMatched.index);
        if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);

    };
    useEffect(foo, [openedCard]);

    const foo2 = () => {


        if (matched.length === 4 && matched.includes(1, 2, 3, 4)) setTimeout(window.alert, 1000, "GRATULACJE!");
        if (matched.length === 4) setTimeout(() => setMatched([]), 1500);
    };
    useEffect(foo2, [matched]);

    console.log(matched);
    console.log(openedCard);

    return (


        <div className="memory container" >
            {pairOfCard.map((el, index) => {
                //lets flip the card

                let isFlipped = false;

                if (openedCard.includes(index)) isFlipped = true;
                if (matched.includes(el.index)) isFlipped = true;
                return (
                    <div
                        className={`memory-card ${isFlipped ? "flipped" : ""} `}
                        key={index}
                        onClick={() => flipCard(index)}
                    >
                        <div className="memory-inner">
                            <div className="memory-front">
                                <img
                                    src={el.address}
                                    alt={el.translate}
                                    width="100"
                                />
                            </div>
                            <div className="memory-back"></div>
                        </div>
                    </div>
                );
            })}
        </div>

    );
}

export default MemoryCard;