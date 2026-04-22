import styled from "styled-components";

export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <span>4 +</span>
            <p>Years
                Experience
                Working</p>
        </StyledWorkExperience>
    );
};

const StyledWorkExperience = styled.div`

    width: 25%;
    padding: 25px;
    font-family: "Playfair Display";

    span {
        font-weight: 700;
        font-size: 100px;
        line-height: 1.2;
        color: #ae7d69;
    }

    p {
        font-weight: 700;
        font-size: 40px;
        line-height: 1.8;
    }
`