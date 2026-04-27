import styled from "styled-components";
import {FormContact} from "../../layout/section/contact/FormContact.tsx";
import {theme} from "../../styles/Theme.ts";

export const BlockForm = () => {
    return (
        <StyledBlockForm>
            <StyledForm>
            <FormContact/>
            </StyledForm>
        </StyledBlockForm>
    );
};

const StyledBlockForm = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    //display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.thierdBg};
`
const StyledForm = styled.div`
    width: 50%;
    height: 80%;
    border-radius: 25px;
    background-color: #dcccbe;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.fontDark};
    & button {
        color: ${theme.colors.fontDark};
        text-align: center;
        
    }
    
    & input, textarea{
        border-bottom: 1px solid ${theme.colors.fontDark};
    }
    
    @media screen and (max-width: 1300px) {
        &{
            width: 80%;            
        }
    }

    @media screen and (max-width: 700px) {
        &{
            width: 90%;
            height: 65%;
        }
    }
`