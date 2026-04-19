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
`