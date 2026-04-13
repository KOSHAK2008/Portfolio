import styled from "styled-components";
import {BoxBth} from "./BoxBth.tsx";

export const TextBlock = () => {
    return (
        <StyledTextBlock>
            <span>I’am freelance </span><h1>web developer</h1> <span>based in Indonesia who loves to craft attractive design experiences for the web.</span>
            <BoxBth/>
        </StyledTextBlock>
    );
};

const StyledTextBlock= styled.div`
    
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