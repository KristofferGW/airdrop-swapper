import React from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import chains from "../data/chains.json";

function SwapForm() {
    return (
        <StyledFormContainer>
                <StyledH2 size="1.3rem">Where to swap for a potential airdrop</StyledH2>
                <StyledLabel htmlFor="chain">Chain:</StyledLabel>
                <SelectField id="chain">
                    {chains.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.value}
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

const InputField = styled.input`
    margin: 10px 0;
    padding: 8px;
`;

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