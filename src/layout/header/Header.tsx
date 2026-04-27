import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWraper} from "../../components/FlexWraper.tsx";
import {Menu} from "./headerMenu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWraper justify={"space-between"}>
                    <Logo/>
                    <Menu/>
                </FlexWraper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
`