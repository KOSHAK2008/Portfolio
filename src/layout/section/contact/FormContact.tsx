import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const FormContact = () => {
    return (
        <StyledFormContact>
            <FieldLabel title={"Your name"}>Your name:</FieldLabel>
            <Field placeholder={"FirstName LastName"} />
            <FieldLabel title={"Your email address:"}>Your email address:</FieldLabel>
            <Field placeholder={"myEmail@gmail.com"} type={"email"}/>
            <FieldLabel  title={"Tell about the project:"} >Your email address:</FieldLabel>
            <Field placeholder={"Tell about the project"} as={"textarea"}/>
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

    textarea {
        resize: none;
        width: 100%;
    }

    @media ${theme.media.tabletNormal} {
        max-width: 400px;
    }
    
    @media ${theme.media.mobile} {
        max-width: 300px;
    }

`
const Field = styled.input`
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    padding: 5px 0;
    border-bottom: 1px solid ${theme.colors.font};
    color: ${theme.colors.accent};
    font-family: "Poppins", "sans-serif";
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;


    &:focus-visible {
        outline: 1px solid ${theme.colors.font};
        border-radius: 5px;
    }
    
    @media ${theme.media.mobile} {
        & {
            font-size: 22px;
        }
    }
`

const FieldLabel = styled.label`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;

    @media ${theme.media.mobile} {
        & {
            font-size: 22px;
        }
    }
`
const ButtonForm = styled.button`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
    color: ${theme.colors.accent};

    @media ${theme.media.mobile} {
        & {
            font-size: 22px;
        }
    }

    &:hover {
        color: ${theme.colors.linkColorActive};
        cursor: pointer;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.font};
        border-radius: 5px;
    }
`