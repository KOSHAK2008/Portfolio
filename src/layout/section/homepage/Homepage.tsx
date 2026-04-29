import styled from "styled-components";
import photo from "../../../assets/images/MyFoto_II.png"
import {TextHeadName} from "./TextHeadName.tsx";
import {Photo} from "../../../components/Image/Image.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {BlockAboutMe} from "./BlockAboutMe.tsx";

export const Homepage = () => {
    return (
        <StyledHomepage>
            <Container>
                <HomepageGround>
                    <HomepageBlock>
                        <TextHeadName/>
                        <BlockAboutMe/>
                    </HomepageBlock>
                    <Photo src={photo} alt="No Photo"/>
                </HomepageGround>
            </Container>
        </StyledHomepage>
    );
};

const StyledHomepage = styled.div`
    //position: relative;
    display: flex;
    justify-content: flex-end;
    background-color: ${theme.colors.primaryBg};
    padding-top: 60px;
`

const HomepageGround = styled.div`
display: flex;
    justify-content: space-between;
`

const HomepageBlock = styled.div`
    z-index: 1;
    width: 50vh;
    //height: 100%;
    padding: 100px 0;

    @media ${theme.media.tabletBig} {
        padding: 50px 0;
    }

    @media ${theme.media.tablet} {
        & {
            padding: 25px;
            color: ${theme.colors.fontDark};
            background-color: ${theme.colors.thierdBg};
            border-radius: 5%;
            position: absolute;
            top: 15%;
            left: 5%;
            width: 90%;
        }
    }

    @media ${theme.media.mobile} {
        & {
            padding: 25px;
        }
    }

    @media screen and (max-width: 450px) {
        & {
            padding: 10px;
        }
    }
`