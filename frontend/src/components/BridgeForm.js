import React from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import StyledContainer from "../styling-components/StyledContainer";

function BridgeForm({
    selectedFromChain,
    setSelectedFromChain,
    selectedToChain,
    setSelectedToChain,
    selectedFromToken,
    setSelectedFromToken,
    selectedToToken,
    setSelectedToToken
    }) {

    return (
        <div>
            <StyledContainer>
                    <StyledH2 size="1.3rem">Where to bridge for a potential airdrop</StyledH2>

                    <StyledLabel htmlFor="fromChain">Bridge from:</StyledLabel>
                    <SelectField
                        id="fromChain"
                        onChange={(e) => setSelectedFromChain(e.target.value)}
                        value={selectedFromChain}    
                    >
                        <option value="">Select a Chain</option>
                        <option value="ethereum">Ethereum</option>
                    </SelectField>

                    {selectedFromChain && (
                        <>
                            <StyledLabel htmlFor="fromToken">Token:</StyledLabel>
                            <SelectField
                                id="fromToken"
                                onChange={(e) => setSelectedFromToken(e.target.value)}
                                value={selectedFromToken}>
                                    <option value="">Select a Token</option>
                                    <option value="ethereum">ETH</option>
                            </SelectField>
                        </>
                    )}

                    {selectedFromToken && (
                        <>
                            <StyledLabel htmlFor="toChain">Bridge to:</StyledLabel>
                            <SelectField
                            id="toChain"
                            onChange={(e) => setSelectedToChain(e.target.value)}
                            value={selectedToChain}
                            >
                            <option value="">Select a Chain</option>
                            <option value="arbitrum">Arbitrum</option>
                            </SelectField>
                        </>
                    )}

                    {selectedToChain && (
                        <>
                            <StyledLabel htmlFor="toToken">Select a Token:</StyledLabel>
                            <SelectField
                            id="toToken"
                            onChange={(e) => setSelectedToToken(e.target.value)}
                            value={selectedToToken}
                            >
                            <option value="">Select a Token</option>
                            <option value="ethereum">ARB</option>
                            </SelectField>
                        </>
                    )}
            </StyledContainer>
        </div>
    );
}

export default BridgeForm;

const SelectField = styled.select`
    margin: 10px 0;
    padding: 8px;
    background: #25213D;
    color: #ffffff;
`;

const StyledLabel = styled.label`
    color: white;
`;