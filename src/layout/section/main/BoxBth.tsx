import {ContactBth} from "../../../components/contact/ContactButton.tsx";
import {DownloadCv} from "../../../components/DownloadCv.tsx";
import styled from "styled-components";

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
`
