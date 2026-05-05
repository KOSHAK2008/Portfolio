import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {animateScroll as scroll} from 'react-scroll';

export const Logo = () => {
    return (
        <StyleLogo onClick={() => { scroll.scrollToTop()}}>
                <Icon cursor={"pointer"} color={theme.colors.icons.colorMyLogo} colorActive={theme.colors.icons.colorActiveMyLogo} iconId={"MyLogo"} height={"50px"} viewBox={"0 0 431 195"}/>
        </StyleLogo>
    );
};

const StyleLogo = styled.a`
    
    @media ${theme.media.tablet} {
        display: none;
    }
`