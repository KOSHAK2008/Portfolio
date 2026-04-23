import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type SlideTypeProps = {
    title: string,
    text: string,
    href: string,
}

export const BlockAboutSlide = (props:SlideTypeProps) => {
    return (
        <StyledBlockAboutSlide>
            <NameProject>{props.title}</NameProject>
            <Text>{props.text} </Text>
            <Path ><a href={`https://koshak2008.github.io/${props.href}`}>View Project</a></Path>
        </StyledBlockAboutSlide>
    );
};

const StyledBlockAboutSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 50px;
`
const NameProject = styled.h3`
    font-weight: 700;
    font-size: 30px; 
    line-height: 1.2;
`
const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.8;
`
const Path = styled.button`
    // width: 150px;
    // height: 50px;
    // border: 1px solid ${theme.colors.accent};
    // border-radius: 25px;
`