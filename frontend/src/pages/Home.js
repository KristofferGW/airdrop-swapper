import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledH1 from '../styling-components/StyledH1';

function Home() {

  return (
    <StyledDiv>
        <StyledH1>Airdrop optimize your <Link to="/swap">Swapping</Link> and <Link to="/bridge">Bridging</Link></StyledH1>
    </StyledDiv>
  );
}

export default Home;

const StyledDiv = styled.div`
  padding: 0 10px 50px 10px;
`;
