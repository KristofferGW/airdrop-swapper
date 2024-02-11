import React from 'react';
import styled from 'styled-components';

const SwapCard = ({ placeToSwap }) => {
    return (
        <StyledCard>
            <h3>{placeToSwap.name}</h3>
            <p>Airdrop likelihood: {placeToSwap.airdropLikelihood}</p>
            <p>Rating: {placeToSwap.rating}</p>
            <a href={placeToSwap.url} target='_blank' rel='noopener noreferrer'>Swap on {placeToSwap.name}</a>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background-color: #310251;
    /* color: white; */
    /* padding-left: 10px;
    padding-bottom: 10px; */
    padding: 1px 16px 16px 16px;
    margin: 8px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    p {
        color: #f7d3f7;
    }
`;

export default SwapCard;