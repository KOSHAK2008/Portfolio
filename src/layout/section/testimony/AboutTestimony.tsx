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
`

const TextAboutReviews = styled.h2`
`
const FiguresAboutReviews = styled.p`
`