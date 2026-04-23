import styled from "styled-components";
import {ContactButton} from "../contact/ContactButton.tsx";

export const Menu = () => {
    return (
            <StyledMenu>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                </ul>
                <ContactButton/>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    gap: 50px;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }`