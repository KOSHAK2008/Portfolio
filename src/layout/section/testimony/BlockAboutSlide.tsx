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
            <Path href={`https://koshak2008.github.io/${props.href}`}>View Project</Path>
        </StyledBlockAboutSlide>
    );
};

const StyledBlockAboutSlide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 50px;
    font-weight: 700;
    
    @media ${theme.media.tabletBig} {
        &{
            padding: 50px 50px;
        }
    }
`
const NameProject = styled.h3`
    font-size: 30px;
    line-height: 1.2;
    color: ${theme.colors.slider.colorTitleSlide};

    @media ${theme.media.tabletBig} {
        & {
            margin-bottom: 30px;
        }
    }
`
const Text = styled.p`
    font-size: 20px;
    line-height: 1.8;
    
    @media ${theme.media.tabletBig} {
        & {
            margin-bottom: 30px;
        }
    }
`
const Path = styled.a`
    color: ${theme.colors.slider.colorLinkSlide};

    &:hover {
        color: ${theme.colors.slider.colorLinkSlideActive};
    }
`