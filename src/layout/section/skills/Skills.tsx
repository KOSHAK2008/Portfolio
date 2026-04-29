import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <BlockSkils>
                    <Icon iconId={"vsCode"} viewBox="0 0 24 24"/>
                    <Icon iconId={"webStorm"} viewBox="0 0 24 24"/>
                    <Icon iconId={"figma"}/>
                    <Icon iconId={"html"} viewBox="0 0 72 82"/>
                    <Icon iconId={"css"} viewBox="0 0 66 75"/>
                    <Icon iconId={"sass"} viewBox="0 0 100 75"/>
                    <Icon iconId={"js"} viewBox="0 0 512 512"/>
                    <Icon iconId={"ts"} viewBox="0 0 15 15"/>
                    <Icon iconId={"react"} viewBox="0 0 100 90"/>
                </BlockSkils>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    height: 100%;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;

    &last-child {
        background-size: cover;
    }
    
    @media ${theme.media.tabletMedium}  {
        padding: 50px 0;
    }
    
`
const BlockSkils = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 5px;
    
    @media ${theme.media.tabletBig} {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    @media ${theme.media.tabletMedium} {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    @media screen and (max-width: 1175px) {
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    
`