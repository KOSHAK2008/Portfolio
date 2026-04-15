import styled from "styled-components";
import {BlockOccupation} from "./BlockOccupation.tsx";

export const Occupation = () => {
    return (
        <StyledOccupation>
            <h1>Developer and Designer, specialized in
                UI/UX and Web Developer</h1>
            <BlockOccupation></BlockOccupation>
        </StyledOccupation>
    );
};

const StyledOccupation = styled.div`
    width: 65%;
    align-content: space-around;
    
    h1 {
        padding: 0 5vh;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
    }
`
