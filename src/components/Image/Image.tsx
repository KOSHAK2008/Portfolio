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
`