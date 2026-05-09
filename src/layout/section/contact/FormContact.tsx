import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

export const FormContact = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_zy7660b', 'template_i7yvtat', form.current, {
                publicKey: 'BRgx3uzjG2-OAlp1a',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <StyledFormContact ref={form} onSubmit={sendEmail}>
            <BlockField>
                <Field required id="textName" placeholder={"FirstName LastName"} name={"user_name"}/>
                <FieldLabel htmlFor="textName" title={"Your name"}>Your name:</FieldLabel>
            </BlockField>
            <BlockField>
                <Field required id="textEmail" placeholder={"YourEmail@gmail.com"} type={"email"} name={"user_email"}/>
                <FieldLabel htmlFor="textEmail" title={"Your email address:"}>Your email address:</FieldLabel>
            </BlockField>
            <BlockField>
                <Field required id="textOffer" placeholder={"Write about your offer"} as={"textarea"} name={"user_message"}/>
                <FieldLabel htmlFor="textOffer" title={"Tell about the project:"}>Your offer:</FieldLabel>
            </BlockField>
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

const BlockField = styled.div`
    position: relative;
    padding-top: 20px;
`
const FieldLabel = styled.label`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
    position: absolute;
    left: 2px;
    color: ${theme.colors.fontFooter};
    transition: 0.2s;

    @media ${theme.media.mobile} {
        & {
            font-size: 22px;
        }
    }
`

const Field = styled.input`
    position: relative;
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
    z-index: 1;

    &:focus + label,
    &:not(:placeholder-shown) + label {
        transform: translateY(-2.2rem);
        font-size: 1.5rem;
    }

    &::placeholder {
        opacity: 0;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
        border-radius: 5px;
    }

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
    transition: color 0.3s ease;


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