import styled from "styled-components";
import {CardOccupation} from "./CardOccupation.tsx";

export const BlockOccupation = () => {
    return (
        <StyledBlockOccupation>
            <CardOccupation title={"Front End Developer"} icon={"computer"}  height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            <CardOccupation title={"UI/UX Designer"} icon={"paint"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            <CardOccupation title={"Branding Designer"} icon={"thunder"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
        </StyledBlockOccupation>
    );
};

const StyledBlockOccupation = styled.div`
    display: flex;
    justify-content: space-around;
    
`