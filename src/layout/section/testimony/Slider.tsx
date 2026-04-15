import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import ImageSlider from "../../../assets/images/2man.webp"
import {Pagination} from "./Pagination.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <ImgSlider src={ImageSlider} alt={"Client`s Photo"}></ImgSlider>
            <Slide>
                <Icon iconId={"comma"} viewBox={"-10 -20 50 50"} width={"50"} height={"50"}/>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent </Text>
                <Pagination/>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
`
const ImgSlider = styled.img`
   height: 50%;
`
const Slide = styled.div`
`

const Text = styled.div`
    font-weight: 700;
    font-size: 20px;
`
