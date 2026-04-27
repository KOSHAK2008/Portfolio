import styled from "styled-components";
// import {BlockAboutTestimony} from "./BlockAboutTestimony.tsx";
import {Slider} from "./Slider.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWraper direction={"column"}>
                    <TitleSection>My Projects</TitleSection>
                    <Slider/>
                    {/*<BlockAboutTestimony/>*/}
                </FlexWraper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${theme.colors.primaryBg};
    padding: 50px 0;
`
const TitleSection = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
`