import styled from "styled-components";
import {BlockAboutSlide} from "./BlockAboutSlide.tsx";
import {theme} from "../../../styles/Theme.ts";

type SlideTypeProps = {
    title: string,
    img: string,
    text: string,
    href: string,
}

export const Slide = (props: SlideTypeProps) => {
    return (
        <StyledSlide>
            <ImgSlider src={props.img} alt={props.title}></ImgSlider>
            <BlockAboutSlide text={props.text} href={props.href} title={props.title}/>
            </StyledSlide>
    );
};

const ImgSlider = styled.img`
    width: 400px;
    //border-top-left-radius: 50px;
    //border-bottom-left-radius: 50px;
`
const StyledSlide = styled.div`
    display: flex;
    //border-radius: 50px;
    //background-color: ${theme.colors.thirdBg};
`
