import styled from "styled-components";
import ImageSlider from "../../../assets/images/2man.webp"
import {Pagination} from "./Pagination.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <ImgSlider src={ImageSlider} alt={"Client`s Photo"}></ImgSlider>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent </Text>
            </Slide>
            <Pagination/>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
`
const ImgSlider = styled.img`
    width: 325px;
`
const Slide = styled.div`
`

const Text = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.8;
`
