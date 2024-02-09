import Header from "../components/Header";
import StyledH2 from "../styling-components/StyledH2";
import StyledContainer from "../styling-components/StyledContainer";

function Disclosures() {
    return (
        <div>
            <Header />
            <StyledContainer>
                <StyledH2>Disclosures</StyledH2>
                <p>Hey Anon,</p>
                <p>Just a heads up for everyone checking out my airdrop hunting recommendations. I'm no journalist, just a fellow investor like you, sharing insights. Keep in mind I can't predict airdrops, and it's crucial to form your own opinions.</p>
                <p>Full disclosure: I might have a stake in some of these protocols. Also, some links could be referral ones. Do your due diligence, and happy investing!</p>
                <p>Cheers,
                    <br/>
                    0xKristoffer
                </p>
            </StyledContainer>
        </div>
    )
}

export default Disclosures;