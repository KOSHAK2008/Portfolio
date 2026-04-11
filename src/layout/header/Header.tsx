import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src="" alt=""/>
            </a>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </nav>
            <button>Contact Me</button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: black;    
`