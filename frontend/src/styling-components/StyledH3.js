import React from "react";
import styled from "styled-components";

function StyledH3({ children, size }) {
    return <H3 size={size}>{children}</H3>
}

const H3 = styled.h3.attrs((props) => ({ style: {fontSize: props.size } }))`
    color: white;
    text-align: center;
`;

export default StyledH3;