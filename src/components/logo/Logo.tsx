import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Logo = () => {
    return (
        <StyleLogo href={"#"}>
                <Icon cursor={"pointer"} color={theme.colors.icons.colorMyLogo} colorActive={theme.colors.icons.colorActiveMyLogo} iconId={"MyLogo"} height={"50px"} viewBox={"0 0 431 195"}/>
        </StyleLogo>
    );
};
export default Logo

const StyleLogo = styled.a`
    
`