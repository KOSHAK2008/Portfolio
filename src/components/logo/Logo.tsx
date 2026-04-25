import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Logo = () => {
    return (
        <StyleLogo href={"#"}>
                <Icon cursor={"pointer"} color={theme.colors.icons.color} colorActive={theme.colors.icons.colorActive} iconId={"MyLogo"} height={"50px"} viewBox={"0 0 431 195"}/>
        </StyleLogo>
    );
};

const StyleLogo = styled.a`
    
`