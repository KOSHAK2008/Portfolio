import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {ContactButton} from "../../../components/contact/ContactButton.tsx";
import {LogoMobile} from "../../../components/logo/LogoMobile.tsx";
import {useState} from "react";
import {Link} from "react-scroll";

export const MobileMenu = (props: { MenuItems: Array<{ title: string, href: string }>, activeBlockFormClick:any, menuIsOpenBlockForm:any }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBthClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <StyledMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBthClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <LogoMobile/>
                <ul>
                    {props.MenuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <NavLink
                                to={item.href}
                                smooth={true}
                            >
                                {item.title}
                            </NavLink>
                        </ListItem>
                    })}
                </ul>
                <ContactButton activeBlockFormClick={props.activeBlockFormClick} menuIsOpenBlockForm={props.menuIsOpenBlockForm}/>
            </MobileMenuPopup>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: none;

    font-size: 20px;

    @media ${theme.media.tablet} {
        display: flex;
        align-items: center;
        gap: 50px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    top: 25px;
    right: 20px;
    background-color: ${theme.colors.slider.colorBgSlide};
    border: 1px solid ${theme.colors.borderColor};
    z-index: 1000;

    span {
        display: block;
        width: 34px;
        height: 4px;
        background-color: ${theme.colors.borderColor};
        position: absolute;
        top: 23px;
        left: 7px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${theme.colors.borderColor};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(2px);
                width: 40px;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${theme.colors.borderColor};
            transform: translateY(7px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(-3px);
                width: 40px;
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.colors.primaryBgPopup};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }
`

const ListItem = styled.li`

`

// @ts-expect-error
const NavLink = styled(Link)`
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.linkColorActive};
    }
`