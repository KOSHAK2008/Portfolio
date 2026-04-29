import styled from "styled-components";
import {BlockOccupation} from "./BlockOccupation.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Occupation = () => {
    return (
        <StyledOccupation>
            <h2>Developer and Designer, specialized in
                UI/UX and Web Developer</h2>
            <BlockOccupation></BlockOccupation>
        </StyledOccupation>
    );
};

const StyledOccupation = styled.div`
    width: 75%;
    align-content: space-around;

    h2 {
        font-size: 40px;
        margin-bottom: 50px;
        text-align: center;
    }

    @media ${theme.media.tabletNormal} {
        & {
            width: 100%;
        }
`
