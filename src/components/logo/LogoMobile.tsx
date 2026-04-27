import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const LogoMobile = () => {
    return (
        <StyleLogoMobile href={"#"}>
                <Icon cursor={"pointer"} color={theme.colors.icons.colorMyLogo} colorActive={theme.colors.icons.colorActiveMyLogo} iconId={"MyLogo"} height={"50px"} viewBox={"0 0 431 195"}/>
        </StyleLogoMobile>
    );
};

const StyleLogoMobile = styled.a`
    display: none;

    @media ${theme.media.tablet} {
        display: inline-block;
        position: fixed;
        top: 25px;
        left: 20px;
    }
`