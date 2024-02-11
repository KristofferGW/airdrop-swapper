import React from "react";
import styled from "styled-components";

function StyledH2({ children, size }) {
    return <H2 size={size}>{children}</H2>
}

const H2 = styled.h2.attrs((props) => ({ style: {fontSize: props.size } }))`
    color: white;
    text-align: center;
`;

export default StyledH2;