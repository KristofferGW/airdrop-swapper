import React from "react";
import styled from "styled-components";

function StyledContainer({ children }) {
    return <StyledDiv className="container">{children}</StyledDiv>
}

export default StyledContainer;

const StyledDiv = styled.div`
    background-color: #120F29;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    margin: auto;
`;