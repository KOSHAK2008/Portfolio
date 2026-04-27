import styled from "styled-components";
import {BlockSocialNetworks} from "./BlockSocialNetworks.tsx";
import {theme} from "../../../styles/Theme.ts";

export const MySocialData = () => {
    return (
        <StyledMySocialData>
            <TextMySocial>Let`s Connect</TextMySocial>
            <BlockSocialNetworks/>
        </StyledMySocialData>
    );
};

const StyledMySocialData = styled.div`

`

const TextMySocial = styled.h2`
    font-size: 100px;
    margin-bottom: 50px;

    @media ${theme.media.mobile} {
        & {    
            font-size: 50px;
        }
    }
`