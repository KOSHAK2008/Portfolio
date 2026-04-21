import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyleLogo href={"#"}>
                <Icon iconId={"MyLogo"} height={"50px"} viewBox={"0 0 431 195"}/>
        </StyleLogo>
    );
};

const StyleLogo = styled.a`
`