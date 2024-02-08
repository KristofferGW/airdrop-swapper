import React from "react";
import StyledH2 from "../styling-components/StyledH2";
import whereToSwap from "../data/whereToSwap.json";

const SwapReults = ({ selectedChain }) => {
    const filteredPlaces = whereToSwap.filter((entry) =>
      entry.chains.includes(selectedChain)  
    );

    const randomizedPlaces = filteredPlaces.sort(() => Math.random() - 0.5);

    return (
        <div>
            <StyledH2>Places to Swap on {selectedChain}</StyledH2>
                <ul>
                    {randomizedPlaces.map((place) =>(
                        <li key={place.name}>
                            <a href={place.url} target="_blank" rel="noopener noreferrer">
                                {place.name}
                            </a>
                        </li>              
                    ))}
                </ul>
        </div>
    );
};

export default SwapReults;