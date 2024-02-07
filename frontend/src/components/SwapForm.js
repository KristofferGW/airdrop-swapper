import React from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import whereToSwap from "../data/whereToSwap.json";
import StyledContainer from "../styling-components/StyledContainer";

function SwapForm({ selectedChain, setSelectedChain }) {
    const uniqueChains = Array.from(
        new Set(whereToSwap.flatMap((entry) => entry.chains))
    );

    const handleChangeChain = (event) => {
        setSelectedChain(event.target.value);
    };

    return (
        <div>
            <StyledContainer>
                    <StyledH2 size="1.3rem">Where to swap for a potential airdrop</StyledH2>
                    <StyledLabel htmlFor="chain">Chain:</StyledLabel>
                    <SelectField id="chain" onChange={handleChangeChain} value={selectedChain}>
                        <option value="">Select a Chain</option>
                        {uniqueChains.map((chain) => (
                            <option key={chain} value={chain}>
                                {chain}
                            </option>
                        ))}
                    </SelectField>
            </StyledContainer>
        </div>
    );
}

export default SwapForm;

const SelectField = styled.select`
    margin: 10px 0;
    padding: 8px;
    background: #25213D;
    color: #ffffff;
`;

const StyledLabel = styled.label`
    color: white;
`;