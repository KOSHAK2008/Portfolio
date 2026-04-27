import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: string;
    colorActive?: string;
    colorBg?: string;
    colorBgActive?: string;
    cursor?: string;
}

type StyledIconPropsType = {
    color?: string;
    colorActive?: string;
    colorBg?: string;
    colorBgActive?: string;
    cursor?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon cursor={props.cursor} color={props.color} colorBg={props.colorBg} colorBgActive={props.colorBgActive} colorActive={props.colorActive} width={props.width || "100"} height={props.height || "100"} viewBox={props.viewBox || "0 0 100 100"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledIcon>
    );
};

const StyledIcon = styled.svg<StyledIconPropsType>`
    & {
        fill: ${props => props.color || "none"};
        stroke: ${props => props.colorBg || "none"};
    }

    &:hover {
        fill: ${props => props.colorActive || "none"};
        stroke: ${props => props.colorBgActive || "none"};
        cursor: ${props => props.cursor || "default"};
    }

`