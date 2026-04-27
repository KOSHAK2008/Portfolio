import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const DownloadCv = () => {
    return (
        <DownloadCvBth >
            <Icon colorBg={theme.colors.icons.colorBg} cursor={"pointer"} colorBgActive={theme.colors.icons.colorBgActive} iconId={"download"} height={"24"} width={"24"} viewBox={"0 0 19 17"}/>Download CV
        </DownloadCvBth>
    );
};

const DownloadCvBth = styled.a`
    display: flex;
    gap: 10px;
    font-weight: 400;
    font-size: 20px;
    
    @media ${theme.media.mobile} {
        & {
            font-size: 16px;
        }
    }

    &:hover {
        color: red;
        cursor: pointer;
    }
`