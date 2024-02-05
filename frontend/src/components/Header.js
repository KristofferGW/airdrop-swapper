import styled from 'styled-components';

function Header() {
    return (
        <div>
            <SiteTitle>Airdrop Swapper</SiteTitle>
        </div>
    )
}

const SiteTitle = styled.h1`
    margin-left: 30px;
`;

export default Header;