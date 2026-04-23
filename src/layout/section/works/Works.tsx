import styled from "styled-components";
import {WorkExperience} from "./WorkExperience.tsx";
import {Occupation} from "./Occupation.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <FlexWraper justify={"space-between"} align={"center"}>
                    <WorkExperience/>
                    <Occupation/>
                </FlexWraper>
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