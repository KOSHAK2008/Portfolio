import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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

    @media ${theme.media.tablet} {
        & {
            width: 700px;
            height: 600px;
        }
    }

    @media screen and (max-width: 630px) {
        & {
            width: 600px;
            height: 680px;
        }
    }
    
    @media ${theme.media.mobile} {
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

    @media screen and (max-width: 400px) {
        & {
            width: 450px;
            height: 530px;
        }
    }

    @media screen and (max-width: 386px) {
        & {
            width: 450px;
            height: 550px;
        }
    }

    @media screen and (max-width: 375px) {
        & {
            width: 350px;
            height: 550px;
        }
    }

    @media screen and (max-width: 367px) {
        & {
            width: 350px;
            height: 600px;
        }
    }
`