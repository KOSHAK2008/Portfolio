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
    //font-weight: 700;
    font-size: 100px;
    //line-height: 1.2;
`