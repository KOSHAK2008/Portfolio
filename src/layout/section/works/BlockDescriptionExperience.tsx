import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

type BlockDescriptionExperiencePropsType = {
    iconId?: string,
    height?: string,
    width?: string,
    viewBox?: string,
    item?: string,
}

export const BlockDescriptionExperience = (props:BlockDescriptionExperiencePropsType) => {
    return (
        <StyledBlockDescriptionExperience>
            <Icon iconId={props.iconId} height={props.height} width={props.width}
                  viewBox={props.viewBox}/>
            <h4>{props.item}</h4>
        </StyledBlockDescriptionExperience>
    );
};

const StyledBlockDescriptionExperience = styled.div`
    display: flex;
`