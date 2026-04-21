import styled from "styled-components";
import photo from "../../../assets/images/MyFoto_II.png"
import {TextHead} from "./TextHead.tsx";
import {TextBlock} from "./TextBlock.tsx";
import {Photo} from "../../../components/Image/Image.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";
import {BoxBth} from "./BoxBth.tsx";
import {Container} from "../../../components/Container.tsx";

const Main = () => {
    return (
        <StyledMain>
            <FlexWraper direction={"column"}>
                <Container>
                    <TextHead/>
                    <TextBlock/>
                    <BoxBth/>
                </Container>
            </FlexWraper>
            <Photo src={photo} alt="No Photo"/>
        </StyledMain>
    );
};
export default Main

const StyledMain = styled.main`
    display: flex;
    background-color: #bcaf9c;
`