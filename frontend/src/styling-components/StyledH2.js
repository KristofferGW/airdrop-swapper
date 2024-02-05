import React from "react";
import styled from "styled-components";

function StyledH2({ children }) {
    return <H2>{children}</H2>
}

const H2 = styled.h2`
    color: white;
`;

export default StyledH2;