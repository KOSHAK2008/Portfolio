import styled from "styled-components";
import photo from "../../../assets/images/man.webp"
import {TextHead} from "./TextHead.tsx";
import {TextBlock} from "./TextBlock.tsx";
import {Photo} from "../../../components/Image/Image.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";
import {BoxBth} from "./BoxBth.tsx";

const Main = () => {
    return (
        <StyledMain>
            <FlexWraper direction={"column"}>
                    <TextHead/>
                    <TextBlock/>
                <BoxBth/>
            </FlexWraper>
                <Photo src={photo} alt="No Photo"/>
        </StyledMain>
    );
};
export default Main

const StyledMain = styled.main`
    display: flex;
`