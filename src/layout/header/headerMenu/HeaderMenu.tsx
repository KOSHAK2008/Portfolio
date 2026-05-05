import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {ContactButton} from "../../../components/contact/ContactButton.tsx";
import {Link} from "react-scroll";

export const HeaderMenu = (props: { MenuItems: Array<{ title: string, href: string }> }) => {
    return (
        <StyledMenu>
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
            <ContactButton/>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    gap: 50px;

    font-size: 20px;

    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`

`

// @ts-expect-error
const NavLink = styled(Link)`
    font-weight: 500;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.linkColorActive};
    }
`