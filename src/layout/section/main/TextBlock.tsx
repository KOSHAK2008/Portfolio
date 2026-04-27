import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

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
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.8;

    @media ${theme.media.tablet} {
        &{
            //width: 100%;
            font-size: 16px;
            margin-bottom: 30px;
        }
    }
    
    &:not (span) {
        //opacity: 0.5;
    }
`