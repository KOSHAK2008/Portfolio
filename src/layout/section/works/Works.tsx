import styled from "styled-components";
import {WorkExperience} from "./WorkExperience.tsx";
import {Occupation} from "./Occupation.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <WorkBlock>
                    <WorkExperience/>
                    <Occupation/>
                </WorkBlock>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.primaryBg};
    padding: 50px 0;
`

const WorkBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.tabletBig} {
        & {
            flex-direction: column;
        }
`