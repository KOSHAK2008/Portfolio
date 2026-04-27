import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <TextFooter>Created by <span>Anton</span> All Reserved!</TextFooter>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    text-align: center;
`
const TextFooter = styled.small`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: 0.02em;
    color: ${theme.colors.footer.color};
    margin: 0;

    span {
        color: ${theme.colors.footer.secondColor};
    }

    & span::after {
        color: ${theme.colors.footer.color};
        content: " | ";
    }
`
