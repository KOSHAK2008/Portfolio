import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

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

    @media ${theme.media.tabletBig} {
        & {
            padding: 0 120px;
        }

        @media ${theme.media.tabletMedium} {
            & {
                padding: 0 20px;
            }
        }
`