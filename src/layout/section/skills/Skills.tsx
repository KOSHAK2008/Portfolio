import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Icon iconId={"figma"}/>
            <Icon iconId={"html"} viewBox="0 0 72 82"/>
            <Icon iconId={"css"} viewBox="0 0 66 75"/>
            <Icon iconId={"sass"} viewBox="0 0 100 75"/>
            <Icon iconId={"react"} viewBox="0 0 100 90"/>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    height: 200px;
    background-color: #533523;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &last-child {
        background-size: cover;

    }
`