import React, { useState } from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import whereToSwap from "../data/whereToSwap.json";

function SwapForm() {
    const [selectedChain, setSelectedChain] = useState("");

    const uniqueChains = Array.from(
        new Set(whereToSwap.flatMap((entry) => entry.chains))
    );

    const handleChangeChain = (event) => {
        setSelectedChain(event.target.value);
    };

    return (
        <StyledFormContainer>
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

                {/* <StyledLabel htmlFor="from">From:</StyledLabel>
                <InputField type="text" id="from" />

                <StyledLabel htmlFor="to">To:</StyledLabel>
                <InputField type="text" id="from" /> */}
                <StyledButton>Search</StyledButton>
        </StyledFormContainer>
    );
}

export default SwapForm;

const StyledFormContainer = styled.div`
    background-color: #120F29;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: auto;
`;

const SelectField = styled.select`
    margin: 10px 0;
    padding: 8px;
    background: #25213D;
    color: #ffffff;
`;

// const InputField = styled.input`
//     margin: 10px 0;
//     padding: 8px;
// `;

const StyledButton = styled.button`
    background-color: #7999c5;
    color: #ffffff;
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5c7eab;
    }
`;

const StyledLabel = styled.label`
    color: white;
`;