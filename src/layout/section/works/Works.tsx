import styled from "styled-components";
import {WorkExperience} from "./WorkExperience.tsx";
import {Occupation} from "./Occupation.tsx";

export const Works = () => {
    return (
        <StyledWorks>
            <WorkExperience/>
            <Occupation/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    display: flex;
    justify-content: center;
    min-width: 100vh;
    background-color: #222A36;
    padding: 10vh 0;
`