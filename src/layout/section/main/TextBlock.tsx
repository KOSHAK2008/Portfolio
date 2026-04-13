import styled from "styled-components";

export const TextBlock = () => {
    return (
        <StyledTextBlock>
            <h2>Hello!</h2><p>I’m Anton Karko</p>
            <span>I’am freelance </span><h1>web developer</h1> <span>based in Indonesia who loves to craft attractive design experiences for the web.</span>
        </StyledTextBlock>
    );
};

const StyledTextBlock= styled.div`
    width: 735px;
    color: #FFFFFF;
    
    h2,p {
        //font-family: Playfair Display;
        font-weight: 700;
        //font-style: Bold;
        font-size: 90px;
        //leading-trim: NONE;
        line-height: 120%;
        letter-spacing: 0;
    }
    h1 {
        display: inline;
        //font-family: Poppins;
        font-weight: 400;
        //font-style: Regular;
        font-size: 20px;
        //leading-trim: NONE;
        line-height: 180%;
        letter-spacing: 0;
    }
    
    span{
        color: #FFFFFF;
        opacity: 0.5;
    }
`