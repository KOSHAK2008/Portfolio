import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWraper} from "../../components/FlexWraper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {theme} from "../../styles/Theme.ts";

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "Skills",
        href: "skills",
    },
    {
        title: "About me",
        href: "about me",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contact",
        href: "contact",
    },
];

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