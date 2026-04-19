import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type CardOccupationPropsType = {
    title: string,
    icon: string,
    height?: string;
    width?: string,
    viewBox?: string,
}

export const CardOccupation = (props: CardOccupationPropsType) => {
    return (
        <StyledCardOccupation>
            <Icon iconId={props.icon} height={props.height} width={props.width} viewBox={props.viewBox}/>
            <h4>{props.title}</h4>
        </StyledCardOccupation>
    );
};

const StyledCardOccupation = styled.div`
    height: 25vh;
    width: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: #676cdb;
    padding: 3vh;
`