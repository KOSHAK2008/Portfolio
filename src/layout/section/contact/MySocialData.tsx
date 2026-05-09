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
    max-width: 700px;
    
    @media ${theme.media.tabletMedium} {
        & {
            max-width: 550px;
        }
    }
`

const TextMySocial = styled.h2`
    font-size: 100px;
    margin-bottom: 50px;
    color: ${theme.colors.fontFooter};

    @media ${theme.media.mobile} {
        & {    
            font-size: 50px;
        }
    }
`