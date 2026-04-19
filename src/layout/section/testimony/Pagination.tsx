import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Pagination = () => {
    return (
        <StyledPagination>
            <ArrowLeft>
                <Icon iconId={"arrowLeft"} width={"29"} height={"26"} viewBox={"0 0 29 26"}/>
            </ArrowLeft>
            <ArrowRight>
                <Icon iconId={"arrowRight"} width={"29"} height={"26"} viewBox={"0 0 29 26"}/>
            </ArrowRight>
        </StyledPagination>
    );
};
const StyledPagination = styled.div`
`

const ArrowRight = styled.button`
`

const ArrowLeft = styled.button`
`