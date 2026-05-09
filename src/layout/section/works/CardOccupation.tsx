import styled from "styled-components";
import {BlockDescriptionExperience} from "./BlockDescriptionExperience.tsx";
import {theme} from "../../../styles/Theme.ts";

type CardOccupationPropsType = Array<
    {
        title?: string,
        place?: string,
        location?: string,
        date?: string;
        iconBuilding?: string,
        iconDate?: string,
        iconLocation?: string,
        heightIcon?: string,
        widthIcon?: string,
        viewBoxIconBuilding?: string,
        viewBoxIconDate?: string,
        viewBoxIconLocation?: string,
        career?: string,
    }>


export const CardOccupation = (props: { data: CardOccupationPropsType }) => {
    return (
        <StyledCardOccupation>
            {props.data.map((item, index) => {
                return <CardOccupationSpecific key={index}>
                    <BlockNameExperience>
                        <TextTitle>{item.title}</TextTitle>
                        <TextAboutThisExperience>{item.career}</TextAboutThisExperience>
                    </BlockNameExperience>
                    <BlockDescription>
                        <BlockDescriptionExperience iconId={item.iconBuilding} height={item.heightIcon}
                                                    width={item.widthIcon}
                                                    viewBox={item.viewBoxIconBuilding} item={item.place}
                        />
                        <BlockDescriptionExperience iconId={item.iconLocation} height={item.heightIcon}
                                                    width={item.widthIcon}
                                                    viewBox={item.viewBoxIconLocation} item={item.location}/>
                        <BlockDescriptionExperience iconId={item.iconDate} height={item.heightIcon}
                                                    width={item.widthIcon}
                                                    viewBox={item.viewBoxIconDate} item={item.date}/>
                    </BlockDescription>
                </CardOccupationSpecific>
            })}
        </StyledCardOccupation>
    );
};

const StyledCardOccupation = styled.div`
    color: ${theme.colors.fontDark};

    h4 {
        font-weight: 500;
        font-size: 12px;
        line-height: 2.3;
        letter-spacing: 0.1em;
    }
`

const TextAboutThisExperience = styled.h4`
    background-color: ${theme.colors.accent};
    border-radius: 50px;
    padding: 5px 10px;
`

const BlockNameExperience = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

`

const BlockDescription = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media ${theme.media.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

`

const CardOccupationSpecific = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    margin: 20px 0;
    gap: 20px;
    background-color: ${theme.colors.slider.colorBgSlide};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 50px;

    @media ${theme.media.mobile} {
        gap: 20px;
    }
`

const TextTitle = styled.h3`
    font-weight: 400;
    font-size: 46px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${theme.colors.fontDark};
`