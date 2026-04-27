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
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    @media screen and (max-width: 950px) {
        & {
            width: 100%;
            border-top-right-radius: 25px;
            border-bottom-left-radius: 0;
            
        }
`
const StyledSlide = styled.div`
    display: flex;
    height: 300px;
    border-radius: 25px;
    background-color: ${theme.colors.slider.colorBgSlide};
    
    @media screen and (max-width: 950px) {
        & {
            flex-direction: column;
            height: 100%;
        }
`
