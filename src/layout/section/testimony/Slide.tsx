import styled from "styled-components";

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
            <Text>{props.text} </Text>
            <Path href={`https://koshak2008.github.io/${props.href}`}>Click here</Path>
        </StyledSlide>
    );
};

const ImgSlider = styled.img`
    width: 325px;
`
const StyledSlide = styled.div`
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.8;
`
const Path = styled.a`
    color: #ae7d69;
`