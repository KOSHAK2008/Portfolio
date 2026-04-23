import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Pagination = () => {
    return (
        <StyledPagination>
            <ArrowLeft>
                <Icon cursor={"pointer"} colorBg={"#2b190e"} colorBgActive={"red"} iconId={"arrowLeft"} width={"29"} height={"26"} viewBox={"0 0 29 26"}/>
            </ArrowLeft>
            <ArrowRight>
                <Icon cursor={"pointer"} colorBg={"#2b190e"} colorBgActive={"red"} iconId={"arrowRight"} width={"29"} height={"26"} viewBox={"0 0 29 26"}/>
            </ArrowRight>
        </StyledPagination>
    );
};
const StyledPagination = styled.div`
    text-align: center;
    button{
        margin: 10px 50px;
    }
`

const ArrowRight = styled.button`
`

const ArrowLeft = styled.button`
`