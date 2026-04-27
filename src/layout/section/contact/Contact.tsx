import styled from "styled-components";
import {FormContact} from "./FormContact.tsx";
import {MySocialData} from "./MySocialData.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <BlockContact>
                    <MySocialData/>
                    <FormContact/>
                </BlockContact>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: ${theme.colors.secondaryBg};
    padding: 50px 0;
`

const BlockContact = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    
    @media screen and (max-width: 950px) {
        & {
            flex-direction: column;
            gap: 50px;
        }
    }

`