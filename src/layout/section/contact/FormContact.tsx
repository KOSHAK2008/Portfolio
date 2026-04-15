import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const FormContact = () => {
    return (
        <StyledFormContact>
            <FieldLabel title={"Your name"}>Your name:</FieldLabel>
            <Field/>
            <FieldLabel title={"Your email address:"}>Your email address:</FieldLabel>
            <Field/>
            <FieldLabel title={"Tell about the project:"}>Your email address:</FieldLabel>
            <Field/>
            <ButtonForm type={"submit"}>Send<Icon iconId={"arrowRight"} width={"29"} height={"26"} viewBox={"0 0 29 26"}/></ButtonForm>
        </StyledFormContact>
    );
};

const StyledFormContact = styled.form`
    max-width: 500px;
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
`
const Field = styled.input`
    
`

const FieldLabel = styled.label`

`
const ButtonForm = styled.button`
    
`