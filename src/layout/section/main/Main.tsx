import styled from "styled-components";
import photo from "../../../assets/images/MyFoto_II.png"
import {TextHead} from "./TextHead.tsx";
import {TextBlock} from "./TextBlock.tsx";
import {Photo} from "../../../components/Image/Image.tsx";
import {BoxBth} from "./BoxBth.tsx";
import {Container} from "../../../components/Container.tsx";
import {Header} from "../../header/Header.tsx";

const Main = () => {
    return (
        <StyledMain>

            <Position>
                <Header/>
                <Container>
                    <MainBlock>
                    <TextHead/>
                    <TextBlock/>
                    <BoxBth/>
                    </MainBlock>
                </Container>
            </Position>
            <Photo src={photo} alt="No Photo"/>
        </StyledMain>
    );
};
export default Main

const StyledMain = styled.main`
    display: flex;
    justify-content: flex-end;
    background-color: #786352;
`
const Position = styled.div`
position: absolute;
`
const MainBlock = styled.div`
width: 735px;
height: 100%;
`