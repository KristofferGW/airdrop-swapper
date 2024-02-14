import React from "react";
import styled from "styled-components";

function StyledH1({ children, size }) {
    return <H1 size={size}>{children}</H1>
}

const H1 = styled.h1.attrs((props) => ({ style: {fontSize: props.size } }))`
    color: white;
    text-align: center;
`;

export default StyledH1;