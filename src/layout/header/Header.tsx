import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";

export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <Logo/>
                <Menu/>
            </StyledHeader>
        </Container>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`