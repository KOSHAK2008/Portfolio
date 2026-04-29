import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWraper} from "../../components/FlexWraper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {theme} from "../../styles/Theme.ts";

const items =["Home", "About", 'Service'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWraper justify={"space-between"}>
                    <Logo/>
                    <HeaderMenu MenuItems={items}/>
                    <MobileMenu MenuItems={items}/>
                </FlexWraper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: ${theme.colors.primaryBgPopup};
    z-index: 2;
`