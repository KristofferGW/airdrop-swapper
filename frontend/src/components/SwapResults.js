import React from "react";
import StyledH2 from "../styling-components/StyledH2";
import SwapCard from "./SwapCard";
import whereToSwap from "../data/whereToSwap.json";

const SwapReults = ({ selectedChain }) => {
    const filteredPlaces = whereToSwap.filter((entry) =>
      entry.chains.includes(selectedChain)  
    );

    const randomizedPlaces = filteredPlaces.sort(() => Math.random() - 0.5);

    return (
        <div>
            <StyledH2>Places to Swap on {selectedChain}</StyledH2>
                <div>
                    {randomizedPlaces.map((placeToSwap) =>(
                        <SwapCard key={placeToSwap.name} placeToSwap={placeToSwap} />           
                    ))}
                </div>
        </div>
    );
};

export default SwapReults;