import styled from "styled-components";

type PhotoPropsType = {
    src: string,
    alt?: string,
}

export const Photo = (props: PhotoPropsType) => {
    return (
        <StyledPhoto src={props.src} alt={props.alt}/>
    );
};
const StyledPhoto = styled.img`
    width: 721px;
    height: 743px;
    object-fit: cover;

    @media screen and (max-width: 700px) {
        & {
            width: 700px;
            height: 600px;
        }
    }

    @media screen and (max-width: 600px) {
        & {
            width: 600px;
            height: 500px;
        }
    }

    @media screen and (max-width: 450px) {
        & {
            width: 470px;
            height: 500px;
        }
    }

    @media screen and (max-width: 375px) {
        & {
            width: 350px;
            height: 500px;
        }
    }

    @media screen and (max-width: 367px) {
        & {
            width: 350px;
            height: 550px;
        }
    }
`