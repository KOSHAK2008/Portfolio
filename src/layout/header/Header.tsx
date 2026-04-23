import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWraper} from "../../components/FlexWraper.tsx";

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