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
    width: 65%;
    align-content: space-around;
    
    h2 {
        padding: 20px 45px;
        text-align: center;
        //font-weight: 700;
        //font-size: 40px;
    }
`
