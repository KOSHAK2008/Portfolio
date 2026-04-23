import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", "Playfair Display", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${theme.colors.font};
    }

    a {
        text-decoration: none;
        color: ${theme.colors.linkcolor};
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    h2 {
        font-weight: 700;
        font-size: 40px;
    }

`