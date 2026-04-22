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
    background-color: #786352;
    padding: 100px 0;
`