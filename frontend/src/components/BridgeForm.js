import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledH2 from "../styling-components/StyledH2";
import StyledContainer from "../styling-components/StyledContainer";

function BridgeForm({
    selectedFromToken,
    setSelectedFromToken,
    selectedToToken,
    setSelectedToToken
    }) {
    
    const [jumperChains, setJumperChains] = useState([]);
    const [selectedFromChain, setSelectedFromChain] = useState({});
    const [selectedToChain, setSelectedToChain] = useState({});

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

    const findMatchingBridges = (fromChain, toChain) => {
        console.log('selected from chain' , fromChain);
        console.log('selected to chain: ', toChain);
    }

    useEffect(() => {
        if (selectedFromChain.name && selectedToChain.name) {
            findMatchingBridges(selectedFromChain, selectedToChain);
        }
    }, [selectedFromChain, selectedToChain]);

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

                    <StyledLabel htmlFor="toChain">Bridge to:</StyledLabel>
                        <SelectField
                            id="toChain"
                            onChange={(e) => {
                                const selectedChain = jumperChains.find(chain => chain.name === e.target.value);
                                setSelectedToChain(selectedChain || { id: "", name: "" });
                                console.log(selectedChain);
                            }}
                            value={selectedToChain.name}>
                            <option value="">Select a Chain</option>
                            {jumperChains.map((chain) => (
                                <option key={chain.id} value={chain.name}>
                                    {chain.name}
                                </option>
                            ))}
                            ))
                        </SelectField>
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