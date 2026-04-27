import styled from "styled-components";

type FlexWraperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wpar?: string;
}

export const FlexWraper = styled.div<FlexWraperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wpar || "nowrap"};
    gap: 15px;

    @media screen and (max-width: 600px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`