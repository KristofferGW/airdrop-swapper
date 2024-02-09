import Header from "../components/Header";
import StyledH2 from "../styling-components/StyledH2";
import StyledContainer from "../styling-components/StyledContainer";

function Privacy() {
    return (
        <div>
            <StyledContainer>
                <StyledH2>Privacy Policy</StyledH2>
                <p>Hey there,</p>
                <p>We respect your privacy, Anon! Our website doesn't collect any personal data. We believe in keeping things simple and secure. No tracking, no cookies – just a hassle-free experience for you.</p>
                <p>If you have any questions or concerns, feel free to reach out at tokentelescope at gmail dot com</p>
                <p>Cheers,
                    <br/>
                Token Telescope</p>
            </StyledContainer>
        </div>
    )
}

export default Privacy;