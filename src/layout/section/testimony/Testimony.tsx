import styled from "styled-components";
import {BlockAboutTestimony} from "./BlockAboutTestimony.tsx";
import {Slider} from "./Slider.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWraper>
                <Slider/>
                <BlockAboutTestimony/>
            </FlexWraper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: rgb(34, 42, 54);
`
