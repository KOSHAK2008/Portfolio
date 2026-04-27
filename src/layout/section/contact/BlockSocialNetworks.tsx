import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const BlockSocialNetworks = () => {
    return (
        <StyledBlockSocialNetworks>
            <SocialNetworks><SocialNetworksLink><Icon cursor={"pointer"} colorBg={theme.colors.icons.colorWebsites}
                                                      colorBgActive={theme.colors.icons.colorActive} iconId={"dribble"}
                                                      height={"25"} width={"25"}
                                                      viewBox={"0 0 23 23"}/></SocialNetworksLink></SocialNetworks>
            <SocialNetworks><SocialNetworksLink><Icon cursor={"pointer"} color={theme.colors.icons.colorWebsites}
                                                      colorActive={theme.colors.icons.colorActive} iconId={"github"}
                                                      height={"25"} width={"25"}
                                                      viewBox={"0 0 25 25"}/></SocialNetworksLink></SocialNetworks>
            <SocialNetworks><SocialNetworksLink><Icon cursor={"pointer"} color={theme.colors.icons.colorWebsites}
                                                      colorActive={theme.colors.icons.colorActive} iconId={"linkedin"}
                                                      height={"25"} width={"25"}
                                                      viewBox={"0 0 23 23"}/></SocialNetworksLink></SocialNetworks>
            <SocialNetworks><SocialNetworksLink><Icon cursor={"pointer"} color={theme.colors.icons.colorWebsites}
                                                      colorActive={theme.colors.icons.colorActive} iconId={"upwork"}
                                                      height={"25"} width={"25"}
                                                      viewBox={"0 0 25 18"}/></SocialNetworksLink></SocialNetworks>
            <SocialNetworks><SocialNetworksLink><Icon cursor={"pointer"} color={theme.colors.icons.colorWebsites}
                                                      colorActive={theme.colors.icons.colorActive} iconId={"youtube"}
                                                      height={"25"} width={"25"}
                                                      viewBox={"0 0 25 17"}/></SocialNetworksLink></SocialNetworks>
        </StyledBlockSocialNetworks>
    );
};

const StyledBlockSocialNetworks = styled.ul`
    display: flex;
`

const SocialNetworks = styled.li`
    list-style-type: none;
`

const SocialNetworksLink = styled.a`
    padding: 10px;
`
