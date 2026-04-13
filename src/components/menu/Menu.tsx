import styled from "styled-components";

export const Menu = () => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }`