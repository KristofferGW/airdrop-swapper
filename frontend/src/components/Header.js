import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <div>
            <Link to="/">
                <SiteTitle src="/logo.png" alt="airdrop swapper logo" style={{ width: '150px' }}/>
            </Link>
        </div>
    )
}

const SiteTitle = styled.img`
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export default Header;