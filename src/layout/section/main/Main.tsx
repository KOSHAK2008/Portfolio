import styled from "styled-components";
import photo from "../../../assets/images/man.png"
import {FlexWraper} from "../../../components/FlexWraper.tsx";
import {BoxBth} from "./BoxBth.tsx";
import {TextBlock} from "./TextBlock.tsx";

export const Main = () => {
    return (
        <div>
            <FlexWraper align={"center"}>
                <FlexWraper justify={"space-between"} direction={"column"}>
                    <TextBlock/>
                    <BoxBth/>
                </FlexWraper>
                <Photo src={photo} alt=""/>
            </FlexWraper>
        </div>
    );
};

const Photo = styled.img`
    width: 721px;
    height: 743px;
    object-fit: cover;
`