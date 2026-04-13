
import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";

export const DownloadCv = () => {
    return (
        <DownloadCvBth>
            <Icon iconId={"download"} height={"24"} width={"24"}/>
            <span>Download me</span>
        </DownloadCvBth>
    );
};

const DownloadCvBth = styled.a`
    width: 136px;
    height: 24px;

`