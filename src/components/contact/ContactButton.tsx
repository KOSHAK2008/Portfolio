import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const ContactButton = () => {
    return (
            <ContactBth>Contact Me</ContactBth>
    );
};

export const ContactBth = styled.button`
    width: 157px;
    height: 50px;
    background-color: ${theme.colors.accent};
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.linkcolor};
`