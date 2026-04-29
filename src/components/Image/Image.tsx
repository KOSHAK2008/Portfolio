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
    width: 50vh;
    object-fit: cover;

    @media ${theme.media.tablet} {
        & {
            width: 100%;
        }
    }
    
     @media screen and (max-width: 654px) {
         & {
             height: 680px;
         }
     }
    
    @media ${theme.media.mobile} {
        & {
            height: 500px;
        }
    }
     @media screen and (max-width: 367px) {
         & {
             height: 600px;
         }
     }
`