import styled from "styled-components";
import ImageOnlineZoo from "../../../assets/images/imageOnlineZoo.webp"
import ImageTravel from "../../../assets/images/imageTravel.webp"
import ImageCodejam from "../../../assets/images/imageCodejam.webp"
import ImageGamePuzzle from "../../../assets/images/imageGamePuzzle.webp"
import ImageAppMomentum from "../../../assets/images/imageMomentum.webp"
import ImageAppSongBird from "../../../assets/images/imageSongbird.webp"
import {Pagination} from "./Pagination.tsx";
import {Slide} from "./Slide.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <Slide title={"Image Website Online-Zoo"} img={ImageOnlineZoo} href={"online-zoo/pages/homepage/"}
                   text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Slide title={"Image Website Travel"} img={ImageTravel} href={"travel-Rss-school"}
                   text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Slide
                title={"Image App for mixing a board game"} img={ImageCodejam} href={"codejam"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Slide
                title={"Image App Momentum"} img={ImageAppMomentum} href={"momentum"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Slide
                title={"Image App Puzzle Game"} img={ImageGamePuzzle} href={"game-puzzle"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Slide
                title={"Image App game bird songs"} img={ImageAppSongBird} href={"songbird"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>
            <Pagination/>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`
