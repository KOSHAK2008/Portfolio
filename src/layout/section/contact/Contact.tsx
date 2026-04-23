import styled from "styled-components";
import {FormContact} from "./FormContact.tsx";
import {MySocialData} from "./MySocialData.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWraper justify={"space-around"} align={"space-between"}>
                    <MySocialData/>
                    <FormContact/>
                </FlexWraper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding: 50px 0;
`