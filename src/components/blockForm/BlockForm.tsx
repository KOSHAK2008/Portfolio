import styled, {css} from "styled-components";
import {FormContact} from "../../layout/section/contact/FormContact.tsx";
import {theme} from "../../styles/Theme.ts";
import {useState} from "react";

export const BlockForm = () => {
    const [menuIsOpenBlockForm, setMenuIsOpenBlockForm] = useState(true);
    const onBlockFormClick = () => {setMenuIsOpenBlockForm(!menuIsOpenBlockForm)}
    return (
        <StyledBlockForm isOpen={menuIsOpenBlockForm}>
            <StyledForm>
                <BlockFormButton isOpen={menuIsOpenBlockForm} onClick={onBlockFormClick}>
                    <span></span>
                </BlockFormButton>
                <FormContact />
            </StyledForm>
        </StyledBlockForm>
    );
};

export const StyledBlockForm = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.thirdBg};
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`

const BlockFormButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    top: 25px;
    right: 20px;
    background-color: ${theme.colors.colorBgBlock};
    border: 1px solid ${theme.colors.borderColor};
    z-index: 1000;

        &::before {
            content: "";
            display: block;
            width: 53px;
            height: 4px;
            background-color: ${theme.colors.borderColor};
            transform: rotate(45deg) translateY(3px);
        }

        &::after {
            content: "";
            display: block;
            width: 53px;
            height: 4px;
            background-color: ${theme.colors.borderColor};
            transform: rotate(-45deg) translateY(-2px);
        }
    }
`

const StyledForm = styled.div`
    position: relative;
    width: 50%;
    height: 80%;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    background-color: ${theme.colors.primaryBgPopup};
    border: 1px solid ${theme.colors.borderColor};

    //color: ${theme.colors.fontDark};

    & button {
        color: ${theme.colors.font};
        text-align: center;

    }

    & input, textarea {
        border-bottom: 1px solid ${theme.colors.fontDark};
        color: ${theme.colors.font};
    }

    & label {
        color: ${theme.colors.fontDark};
    }

    &input:focus-visible {
        outline: 1px solid ${theme.colors.font};
        border-radius: 5px;
    }

    @media screen and (max-width: 1300px) {
        & {
            width: 80%;
        }
    }

    @media ${theme.media.tablet} {
        & {
            width: 90%;
            height: 65%;
        }
    }
`