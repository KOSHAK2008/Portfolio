import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import Typewriter from 'typewriter-effect';


export const TextBlock = () => {
    return (
        <StyledTextBlock>
            <p>
                A Frontend Developer
            </p>
            <span>
            <Typewriter
                options={{
                    strings: ['A Frontend Developer', ],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                }}
            />
            </span>
            based in Indonesia who loves to craft attractive design
            experiences for the web.
        </StyledTextBlock>
    );
};

const StyledTextBlock = styled.h1`

    display: inline;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.8;

    p {
        display: none;
    }

    @media ${theme.media.tablet} {
        & {
            font-size: 16px;
            margin-bottom: 30px;
        }
    }
`