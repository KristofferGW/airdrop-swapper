import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import StyledContainer from "../styling-components/StyledContainer";

function BridgeForm({
    selectedToChain,
    setSelectedToChain,
    selectedFromToken,
    setSelectedFromToken,
    selectedToToken,
    setSelectedToToken
    }) {
    
    const [jumperChains, setJumperChains] = useState([]);
    const [selectedFromChain, setSelectedFromChain] = useState({});

    const [jumperTokens, setJumperTokens] = useState([]);

    useEffect(() => {
        const fetchJumperChains = async () => {
            const options = { method: 'GET', headers: { accept: 'application/json' } };

            try {
                const response = await fetch('https://li.quest/v1/chains?chainTypes=EVM%2CSVM', options);
                const data = await response.json();
                
                const mappedChains = data.chains.map(chain => ({
                    name: chain.name,
                    id: chain.id,
                }));

                setJumperChains(mappedChains);
            } catch (error) {
                console.error('Error fetching jumper chains', error);
            }
        };

        fetchJumperChains();
    }, []);

    //When from chain is choosen, call the API to fetch all tokens for that chain only and display in first token field.
    const fetchJumperTokens = async (selectedFromChainId) => {
        console.log('selectedFromChainId: ', selectedFromChainId)
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        try {
            const response = await fetch(`https://li.quest/v1/tokens?chains=${selectedFromChainId}&chainTypes=EVM%2CSVM`, options);
            const data = await response.json();
            console.log('data from fetchJumperTokens: ', data);
            console.log('tokens on chosen chain: ', data.tokens[1]);
            
        } catch (error) {
            console.error('Error fetching jumper tokens', error);
        }
    }

    console.log(jumperTokens);

    return (
        <div>
            <StyledContainer>
                    <StyledH2 size="1.3rem">Where to bridge for a potential airdrop</StyledH2>

                    <StyledLabel htmlFor="fromChain">Bridge from:</StyledLabel>
                        <SelectField
                            id="fromChain"
                            onChange={(e) => {
                                const selectedChain = jumperChains.find(chain => chain.name === e.target.value);
                                setSelectedFromChain(selectedChain || { id: "", name: "" });
                                console.log(selectedChain);
                                fetchJumperTokens(selectedChain.id);
                            }}
                            value={selectedFromChain.name}>
                            <option value="">Select a Chain</option>
                            {jumperChains.map((chain) => (
                                <option key={chain.id} value={chain.name}>
                                    {chain.name}
                                </option>
                            ))}
                            ))
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