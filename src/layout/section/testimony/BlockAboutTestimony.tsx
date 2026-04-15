import styled from "styled-components";
import {AboutTestimony} from "./AboutTestimony.tsx";

export const BlockAboutTestimony = () => {
    return (
        <StyledBlockAboutTestimony>
            <AboutTestimony title={"Satisfaction Clients"} figures={"100%"}></AboutTestimony>
            <AboutTestimony title={"clients On Worldwide"} figures={"+80"}></AboutTestimony>
            <AboutTestimony title={"Projects Done"} figures={"743"}></AboutTestimony>
        </StyledBlockAboutTestimony>
    );
};

const StyledBlockAboutTestimony = styled.div`

`