import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const ContactButton = () => {
    return (
            <ContactBth>Contact Me</ContactBth>
    );
};

export const ContactBth = styled.button`
    width: 160px;
    height: 50px;
    background-color: ${theme.colors.accent};
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.linkColor};
    
    @media screen and (max-width: 550px) {
        & {
            font-size: 16px;
        }
    }

    &:hover {
        color: ${theme.colors.icons.colorBgActive};
        cursor: pointer;
    }
`