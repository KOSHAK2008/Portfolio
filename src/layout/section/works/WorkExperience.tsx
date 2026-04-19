import styled from "styled-components";

export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <span>4+</span>
            <p>Years
                Experience
                Working</p>
        </StyledWorkExperience>
    );
};

const StyledWorkExperience = styled.div`

    width: 21%;

    span {
        font-weight: 700;
        font-size: 100px;
        // line-height: 120px; 
        line-height: 1.2;
        color: #676cdb;
    }

    p {
        font-weight: 700;
        font-size: 40px;
        // line-height: 72px; 
        line-height: 1.8;
    }
`