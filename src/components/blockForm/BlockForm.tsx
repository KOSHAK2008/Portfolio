import styled, {css} from "styled-components";
import {FormContact} from "../../layout/section/contact/FormContact.tsx";
import {theme} from "../../styles/Theme.ts";
import {useState} from "react";

export const BlockForm = () => {
    const [menuisOpenBlockForm, setmenuisOpenBlockForm] = useState(false);
    const onBlockFormClikc = () => {setmenuisOpenBlockForm(!menuisOpenBlockForm)}
    return (
        <StyledBlockForm isOpen={menuisOpenBlockForm}>
            <StyledForm>
                <BlockFormButton isOpen={menuisOpenBlockForm} onClick={onBlockFormClikc}>
                    <span></span>
                </BlockFormButton>
                <FormContact />
            </StyledForm>
        </StyledBlockForm>
    );
};

const StyledBlockForm = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.thierdBg};
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
    background-color: ${theme.colors.icons.colorMyLogo};
    z-index: 1000;

        &::before {
            content: "";
            display: block;
            width: 50px;
            height: 4px;
            background-color: ${theme.colors.font};
            transform: rotate(45deg) translateY(1px);
        }

        &::after {
            content: "";
            display: block;
            width: 50px;
            height: 4px;
            background-color: ${theme.colors.font};
            transform: rotate(-45deg) translateY(-1px);
        }
    }
`

const StyledForm = styled.div`
    position: relative;
    width: 50%;
    height: 80%;
    border-radius: 25px;
    background-color: #dcccbe;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;

    color: ${theme.colors.fontDark};

    & button {
        color: ${theme.colors.fontDark};
        text-align: center;

    }

    & input, textarea {
        border-bottom: 1px solid ${theme.colors.fontDark};
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