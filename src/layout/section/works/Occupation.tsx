import styled from "styled-components";
import {BlockOccupation} from "./BlockOccupation.tsx";

export const Occupation = () => {
    return (
        <StyledOccupation>
            <h2>My Experience</h2>
            <BlockOccupation></BlockOccupation>
        </StyledOccupation>
    );
};

const StyledOccupation = styled.div`
    width: 100%;
    align-content: space-around;

    h2 {
        font-weight: 700;
        font-size: 42px;
        margin-bottom: 50px;
        text-align: center;
    }
`
