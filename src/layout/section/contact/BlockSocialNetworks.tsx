import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

export const BlockSocialNetworks = () => {
    return (
        <StyledBlockSocialNetworks>
            <SocialNetworks><Icon iconId={"dribble"} height={"23"} width={"23"} viewBox={"0 0 23 23"}/></SocialNetworks>
            <SocialNetworks><Icon iconId={"github"} height={"25"} width={"25"} viewBox={"0 0 25 25"}/></SocialNetworks>
            <SocialNetworks><Icon iconId={"linkedin"} height={"25"} width={"25"} viewBox={"0 0 25 25"}/></SocialNetworks>
            <SocialNetworks><Icon iconId={"upwork"} height={"25"} width={"25"} viewBox={"0 0 25 25"}/></SocialNetworks>
            <SocialNetworks><Icon iconId={"youtube"} height={"25"} width={"25"} viewBox={"0 0 25 25"}/></SocialNetworks>
        </StyledBlockSocialNetworks>
    );
};

const StyledBlockSocialNetworks = styled.ul`
`

const SocialNetworks = styled.a`
    padding: 10px;
`
