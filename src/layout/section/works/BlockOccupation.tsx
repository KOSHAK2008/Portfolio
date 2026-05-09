import {CardOccupation} from "./CardOccupation.tsx";
import styled from "styled-components";

type BlockOccupationTypeProps = {
    data: dataPropsType,
    title: string,
}

type dataPropsType = Array<
    {
        title?: string,
        place?: string,
        location?: string,
        date?: string;
        iconBuilding?: string,
        iconDate?: string,
        iconLocation?: string,
        heightIcon?: string,
        widthIcon?: string,
        viewBoxIconBuilding?: string,
        viewBoxIconDate?: string,
        viewBoxIconLocation?: string,
    }>

export const BlockOccupation = (props: BlockOccupationTypeProps) => {
    return (
        <StyledBlockOccupation>
            <h2>{props.title}</h2>
            <CardOccupation data={props.data}/>
        </StyledBlockOccupation>
    );
};

const StyledBlockOccupation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 50px;

    h2 {
        font-weight: 700;
        font-size: 42px;
        margin-bottom: 50px;
        text-align: center;
    }
`
