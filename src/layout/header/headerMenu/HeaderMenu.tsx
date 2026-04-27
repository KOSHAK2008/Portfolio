import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {ContactButton} from "../../../components/contact/ContactButton.tsx";

export const HeaderMenu = (props: { MenuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.MenuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                        </Link>
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

const Link = styled.a`
    font-weight: 500;

    &:hover {
        color: ${theme.colors.linkColorActive};
    }
`