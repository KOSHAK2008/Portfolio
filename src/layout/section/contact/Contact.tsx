import styled from "styled-components";
import {FormContact} from "./FormContact.tsx";
import {MySocialData} from "./MySocialData.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <MySocialData/>
            <FormContact/>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: black;
    display: flex;
    justify-content: space-around;
    padding: 100px 0;
`