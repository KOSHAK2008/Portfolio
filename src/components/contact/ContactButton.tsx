import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const ContactButton = () => {
    return (
            <ContactBth >Contact Me</ContactBth>
    );
};

export const ContactBth = styled.button`
    width: 160px;
    height: 50px;
    background-color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.borderColor};
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.linkColor};
    border-radius: 20px;
    transition: color 0.3s ease;
    
    @media screen and (max-width: 550px) {
        & {
            font-size: 16px;
        }
    }

    &:hover {
        color: ${theme.colors.icons.colorBgActive};
        cursor: pointer;
    }
    &:active{
        transform: scale(1.1);
    }
`