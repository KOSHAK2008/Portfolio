import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import {JackInTheBox} from "react-awesome-reveal";

const iconData = [
    {
        iconId: "vsCode",
        viewBox: "0 0 24 24",
    },
    {
        iconId: "webStorm",
        viewBox: "0 0 24 24",
    },
    {
        iconId: "figma",
    },
    {
        iconId: "html",
        viewBox: "0 0 72 82",
    },
    {
        iconId: "css",
        viewBox: "0 0 66 75",
    },
    {
        iconId: "sass",
        viewBox: "0 0 100 75",
    },
    {
        iconId: "js",
        viewBox: "0 0 512 512",
    },
    {
        iconId: "ts",
        viewBox: "0 0 15 15",
    },
    {
        iconId: "react",
        viewBox: "0 0 100 90",
    },
]

export const Skills = () => {
    return (
        <StyledSkills id={"skills"}>
            <Container>
                <BlockSkills>
                    <JackInTheBox cascade damping={0.2}>
                        {iconData.map((i, index) => {
                            return <Icon iconId={i.iconId} key={index} viewBox={i.viewBox}/>
                        })}
                    </JackInTheBox>
                </BlockSkills>
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

    @media ${theme.media.tabletMedium} {
        padding: 50px 0;
    }

`
const BlockSkills = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 25px;

    //@media ${theme.media.tabletBig} {
        //grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    // @media ${theme.media.tabletMedium} {
    //     grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    // }
    //
    // @media screen and (max-width: 1175px) {
    //     grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    // }
    
     @media screen and (max-width: 1100px) {
         gap: 5px;
     }

`

