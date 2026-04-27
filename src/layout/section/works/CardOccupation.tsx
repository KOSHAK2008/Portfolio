import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

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
            <CardOccupationSpecific>
                <Icon iconId={props.icon} height={props.height} width={props.width} viewBox={props.viewBox}/>
                <h4>{props.title}</h4>
            </CardOccupationSpecific>
        </StyledCardOccupation>
    );
};

const StyledCardOccupation = styled.div`
    height: 295px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${theme.colors.accent};
    padding: 30px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
        text-align: justify;
    }
`

const CardOccupationSpecific = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 105px;
    height: 90px;
`