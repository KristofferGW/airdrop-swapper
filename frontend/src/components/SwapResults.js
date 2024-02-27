import React from "react";
import StyledH2 from "../styling-components/StyledH2";
import SwapCard from "./SwapCard";
import whereToSwap from "../data/whereToSwap.json";

const SwapReults = ({ selectedChain }) => {
    const filteredPlaces = whereToSwap.filter((entry) =>
      entry.chains.includes(selectedChain)  
    );

    const airdropLikelihoodToNum = { "High": 3, "Medium": 2, "Low": 1}

    const calculatedScore = (place) => {
        const randomFactor = Math.floor(Math.random() * 8);

        return place.rating + airdropLikelihoodToNum[place.airdropLikelihood] + randomFactor;
    }

    const sortedPlaces = filteredPlaces.sort((a, b) => calculatedScore(b) - calculatedScore(a));

    return (
        <div>
            <StyledH2 size="1.3rem">Places to Swap on {selectedChain}</StyledH2>
                <div>
                    {sortedPlaces.map((placeToSwap) =>(
                        <SwapCard key={placeToSwap.name} placeToSwap={placeToSwap} />           
                    ))}
                </div>
        </div>
    );
};

export default SwapReults;