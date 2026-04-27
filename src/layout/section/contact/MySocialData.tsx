import styled from "styled-components";
import {BlockSocialNetworks} from "./BlockSocialNetworks.tsx";

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

    @media screen and (max-width: 450px) {
        & {    
            font-size: 50px;
        }
    }
`