import {TextBlock} from "./TextBlock.tsx";
import {BoxBth} from "./BoxBth.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const BlockAboutMe = () => {
    return (
        <StyledBlockAboutMe>
            <TextBlock/>
            <BoxBth/>
        </StyledBlockAboutMe>
    );
};

const StyledBlockAboutMe =styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${theme.media.mobile} {
        & {
            width: 100%;
            height: 100%;
        }
    }
`