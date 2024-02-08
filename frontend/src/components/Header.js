import styled from 'styled-components';

function Header() {
    return (
        <div>
            <SiteTitle src="/logo.png" alt="airdrop swapper logo" style={{ width: '150px' }}/>
        </div>
    )
}

const SiteTitle = styled.img`
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export default Header;