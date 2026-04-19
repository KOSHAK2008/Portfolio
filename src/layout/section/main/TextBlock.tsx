import styled from "styled-components";

export const TextBlock = () => {
    return (
        <StyledTextBlock>
            I’am freelance<span> web developer</span> based in Indonesia who loves to craft attractive design
            experiences for the web.
        </StyledTextBlock>
    );
};

const StyledTextBlock = styled.h1`

    display: inline;
    //font-family: Poppins;
    font-weight: 400;
    //font-style: Regular;
    font-size: 20px;
    //leading-trim: NONE;
    line-height: 180%;
    letter-spacing: 0;

    span {
        color: #FFFFFF;
        opacity: 0.5;
    }
`