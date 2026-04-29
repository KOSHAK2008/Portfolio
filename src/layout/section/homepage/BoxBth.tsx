import {ContactBth} from "../../../components/contact/ContactButton.tsx";
import {DownloadCv} from "../../../components/DownloadCv.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const BoxBth = () => {
    return (
        <StyledBoxBth>
            <ContactBth>Email me</ContactBth>
            <DownloadCv/>
        </StyledBoxBth>
    );
};

const StyledBoxBth = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${theme.media.mobile} {
        & {
            gap: 30px;
        }
    }

    & {
        @media screen and (max-width: 400px) {
            flex-direction: column;
        }
    }
`
