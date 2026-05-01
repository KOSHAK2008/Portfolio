import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import ImageOnlineZoo from "../../../assets/images/imageOnlineZoo.webp"
import ImageTravel from "../../../assets/images/imageTravel.webp"
import ImageCodeJam from "../../../assets/images/imageCodejam.webp"
import ImageGamePuzzle from "../../../assets/images/imageGamePuzzle.webp"
import ImageAppMomentum from "../../../assets/images/imageMomentum.webp"
import ImageAppSongBird from "../../../assets/images/imageSongbird.webp"
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slide} from "./Slide.tsx";
import "../../../styles/slider.css"
import {theme} from "../../../styles/Theme.ts";

const items = [
    <Slide title={"Image Website Online-Zoo"} img={ImageOnlineZoo} href={"online-zoo/pages/homepage/"}
           text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
    <Slide title={"Image Website Travel"} img={ImageTravel} href={"travel-Rss-school"}
           text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
    <Slide
        title={"Image App for mixing a board game"} img={ImageCodeJam} href={"codejam"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
    <Slide
        title={"Image App Momentum"} img={ImageAppMomentum} href={"momentum"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
    <Slide
        title={"Image App Puzzle Game"} img={ImageGamePuzzle} href={"game-puzzle"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
    <Slide
        title={"Image App game bird songs"} img={ImageAppSongBird} href={"songbird"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a"}/>,
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
            renderPrevButton={() => {
                return (
                    <ArrowLeft>
                        <Icon cursor={"pointer"} colorBg={theme.colors.icons.color}
                              colorBgActive={theme.colors.icons.colorActive} iconId={"arrowLeft"} width={"29"}
                              height={"26"} viewBox={"0 0 29 26"}/>
                    </ArrowLeft>
                )
            }}

            renderNextButton={() => {
                return (
                    <ArrowRight>
                        <Icon cursor={"pointer"} colorBg={theme.colors.icons.color}
                              colorBgActive={theme.colors.icons.colorActive} iconId={"arrowRight"} width={"29"}
                              height={"26"}
                              viewBox={"0 0 29 26"}/>
                    </ArrowRight>)
            }}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const ArrowLeft = styled.button`
`

const ArrowRight = styled.button`
`

//
////
// export const Slider = () => {
//     return (
//         <StyledSlider>
//
//         </StyledSlider>
//     );
// };


