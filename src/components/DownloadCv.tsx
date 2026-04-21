import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";

export const DownloadCv = () => {
    return (
        <DownloadCvBth >
            <Icon iconId={"download"} height={"24"} width={"24"} viewBox={"0 0 24 24"}/>
            <input type="button" value={"download"}></input>
        </DownloadCvBth>
    );
};

const DownloadCvBth = styled.div`
    width: 136px;
    height: 24px;
    display: flex;

    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    background-color: rgb(34, 42, 54);

    input {
        font-family: "Poppins";
        font-weight: 400;
        // line-height: 24px; 
        font-size: 20px;
        line-height: 1.2;
    }
`