import React, {useState} from 'react';
import StyledContainer from '../styling-components/StyledContainer';
import BridgeForm from '../components/BridgeForm';
import SwapReults from '../components/SwapResults';

function BridgePage() {
    const [matchingBridges, setMatchingBridges] = useState([]);

    return (
        <div>
        <StyledContainer>
        <BridgeForm setMatchingBridges={setMatchingBridges} matchingBridges={matchingBridges} />
        {matchingBridges && <SwapReults matchingBridges={matchingBridges} />}
        </StyledContainer>
    </div>
    );
}

export default BridgePage;