import React, { useState } from 'react';
import Header from '../components/Header';
import SwapForm from '../components/SwapForm';
import SwapReults from '../components/SwapResults';
import StyledContainer from '../styling-components/StyledContainer';

function Home() {
  const [selectedChain, setSelectedChain] = useState("");

  return (
    <div>
      <StyledContainer>
        <SwapForm setSelectedChain={setSelectedChain} />
        {selectedChain && <SwapReults selectedChain={selectedChain} />}
      </StyledContainer>
    </div>
  );
}

export default Home;
