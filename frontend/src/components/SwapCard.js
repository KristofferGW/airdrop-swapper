import React from 'react';
import StyledCard from '../styling-components/StyledCard';

const SwapCard = ({ placeToSwap }) => {
    return (
        <StyledCard>
            <h3>{placeToSwap.name}</h3>
            <p>Airdrop likelihood: {placeToSwap.airdropLikelihood}</p>
            <p>Rating: {placeToSwap.rating}</p>
            <a href={placeToSwap.url} target='_blank' rel='noopener noreferrer'>Go to {placeToSwap.name}</a>
        </StyledCard>
    )
}

export default SwapCard;