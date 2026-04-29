import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const TextHeadName = () => {
    return (<StyleTextHead>Hello! I’m Anton Karko
        </StyleTextHead>
    );
};
const StyleTextHead = styled.h2`
    width: 735px;
    font-weight: 700;
    font-size: 90px;
    line-height: 1.2;

    @media ${theme.media.tablet} {
        & {
            width: 100%;
        }
    }

    @media ${theme.media.mobile} {
        & {
            font-size: 50px;
            margin-bottom: 50px;
        }
    }
`