import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const FormContact = () => {
    return (
        <StyledFormContact>
            <FieldLabel title={"Your name"}>Your name:</FieldLabel>
            <Field/>
            <FieldLabel title={"Your email address:"}>Your email address:</FieldLabel>
            <Field/>
            <FieldLabel title={"Tell about the project:"} >Your email address:</FieldLabel>
            <Field as={"textarea"}/>
            <ButtonForm type={"submit"}>Send</ButtonForm>
        </StyledFormContact>
    );
};

const StyledFormContact = styled.form`
    max-width: 500px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`
const Field = styled.input`
    border: none;
    background: transparent;
    outline: none;
    padding: 5px 0;
    border-bottom: 1px solid #b4acac;
    color: #ae7d69;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
`

const FieldLabel = styled.label`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
`
const ButtonForm = styled.button`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
    color: #ae7d69;

    &:hover {
        color: ${theme.colors.linkColorActive};
        cursor: pointer;
    }
`