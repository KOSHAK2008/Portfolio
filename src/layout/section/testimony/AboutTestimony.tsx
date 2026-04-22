import styled from "styled-components";

type AboutTestimonyPropsType = {
    title: string,
    figures: string,
}

export const AboutTestimony = (props: AboutTestimonyPropsType) => {
    return (
        <StyledAboutTestimony>
            <TextAboutReviews>{props.title}</TextAboutReviews>
            <FiguresAboutReviews>{props.figures}</FiguresAboutReviews>
        </StyledAboutTestimony>
    )
};

const StyledAboutTestimony = styled.div`
    font-family: "Playfair Display";
`

const TextAboutReviews = styled.h3`
    font-weight: 700;
    font-size: 30px;
    line-height: 1.2;
`

const FiguresAboutReviews = styled.span`
    font-weight: 700;
    font-size: 50px;
    line-height: 1.2;
    color: #ae7d69;
`