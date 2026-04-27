import styled from "styled-components";
import {BlockOccupation} from "./BlockOccupation.tsx";

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
`
