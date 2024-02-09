import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
    return (
        <StyledFooter>
            <Link to="/privacy">
                Privacy
            </Link>
            <Link to="/disclosures">
                Disclosures
            </Link>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;