import React, { useState } from 'react';
import SwapForm from '../components/SwapForm';
import StyledContainer from '../styling-components/StyledContainer';

function SwapPage() {
  const [selectedChain, setSelectedChain] = useState("");

  return (
    <div>
      <StyledContainer>
        <SwapForm setSelectedChain={setSelectedChain} />
      </StyledContainer>
    </div>
  );
}

export default SwapPage;