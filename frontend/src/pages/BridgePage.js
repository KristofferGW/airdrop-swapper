import React, {useState} from 'react';
import StyledContainer from '../styling-components/StyledContainer';
import BridgeForm from '../components/BridgeForm';

function BridgePage() {
    const [selectedToChain, setSelectedToChain] = useState('');
    const [selectedFromToken, setSelectedFromToken] = useState('');
    const [selectedToToken, setSelectedToToken] = useState('');

    return (
        <div>
        <StyledContainer>
        <BridgeForm
            selectedToChain={selectedToChain}
            setSelectedToChain={setSelectedToChain}
            selectedFromToken={selectedFromToken}
            setSelectedFromToken={setSelectedFromToken}
            selectedToToken={selectedToToken}
            setSelectedToToken={setSelectedToToken} />
        </StyledContainer>
    </div>
    );
}

export default BridgePage;