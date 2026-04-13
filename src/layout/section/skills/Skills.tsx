import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Icon iconId={"figma"}/>
            <Icon iconId={"html"}/>
            <Icon iconId={"css"}/>
            <Icon iconId={"sass"}/>
            <Icon iconId={"react"}/>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    height: 200px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    &last-child {
        background-size: cover;

    }
`