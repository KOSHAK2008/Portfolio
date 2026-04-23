import styled from "styled-components";

type ContainerTypeProps = {
    maxWidth?: string,
    width?: string,
    height?: string,
}
export const Container = styled.div<ContainerTypeProps>`
    max-width: ${props => props.maxWidth || "1196px"};
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    margin: 0 auto;

    @media screen and (max-width: 1440px) {
        & {
            padding: 0 125px;
        }

        @media screen and (max-width: 1196px) {
            & {
                padding: 15px;
            }
        }
`