import styled from "styled-components";
import photo from "../../../assets/images/MyFoto_II.png"
import {TextHeadName} from "./TextHeadName.tsx";
import {Photo} from "../../../components/Image/Image.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";
import {BlockAboutMe} from "./BlockAboutMe.tsx";

const Main = () => {
    return (
        <StyledMain>
            <Position>
                <Container>
                    <MainBlock>
                        <TextHeadName/>
                        <BlockAboutMe/>
                    </MainBlock>
                </Container>
            </Position>
            <Photo src={photo} alt="No Photo"/>
        </StyledMain>
    );
};
export default Main

const StyledMain = styled.main`
    display: flex;
    justify-content: flex-end;
    background-color: ${theme.colors.primaryBg};
`
const Position = styled.div`
    position: absolute;
    top: 15%;
    left: 5%;

    @media screen and (max-width: 600px) {
        & {
            left: 0;
            top: 0;
        }
    }
    
    
`
const MainBlock = styled.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 650px) {
        & {
            padding: 25px;
            color: ${theme.colors.fontDark};
            background-color: ${theme.colors.thierdBg};
            border-radius: 5%;
        }
    }

    @media screen and (max-width: 550px) {
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