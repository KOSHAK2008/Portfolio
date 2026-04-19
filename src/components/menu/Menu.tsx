import styled from "styled-components";
import {Contact} from "../contact/Contact.tsx";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                </ul>
                <Contact/>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    gap: 50px;
    
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }`