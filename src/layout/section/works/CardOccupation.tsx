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
    height: 290px;
    width: 295px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: #676cdb;
    padding: 30px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
        //color: #222a36;
        color: #fff;
    }
`