import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

type CardOccupationPropsType = Array<
    {
        title: string,
        place: string,
        date?: string;
        iconBuilding?: string,
        iconDate?: string,
        iconLocation?: string,
        heightIcon?: string,
        widthIcon?: string,
        viewBoxIconBuilding?: string,
        viewBoxIconDate?: string,
        viewBoxIconLocation?: string,
    }>

export const CardOccupation = (props: { dataExperience: CardOccupationPropsType }) => {
    return (
        <StyledCardOccupation>
            {props.dataExperience.map((item, index) => {
                return <CardOccupationSpecific key={index}>
                    <BlockNameExperience>
                        <TextTitle>{item.title}</TextTitle>
                        <TextAboutThisExperience>Intership</TextAboutThisExperience>
                    </BlockNameExperience>
                    <BlockDescription>
                        <BlockDescritionExperience>
                            <Icon iconId={item.iconBuilding} height={item.heightIcon} width={item.widthIcon}
                                  viewBox={item.viewBoxIconBuilding}/>
                            <h4>{item.place}</h4>
                        </BlockDescritionExperience>
                        <BlockDescritionExperience>
                            <Icon iconId={item.iconDate} height={item.heightIcon} width={item.widthIcon}
                                  viewBox={item.viewBoxIconDate}/>
                            <h4>{item.date}</h4>
                        </BlockDescritionExperience>
                    </BlockDescription>
                </CardOccupationSpecific>
            })}
        </StyledCardOccupation>
    );
};

const StyledCardOccupation = styled.div`

    h4 {
        font-weight: 500;
        font-size: 12px;
        line-height: 2.3;
        letter-spacing: 0.1em;
    }
`

const TextAboutThisExperience = styled.h4`
    background-color: ${theme.colors.secondaryBg};
    border-radius: 50px;
    padding: 5px 10px;
`

const BlockNameExperience = styled.div`
    display: flex;
    justify-content: space-around;
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

const BlockDescritionExperience = styled.div`
    display: flex;
`

const CardOccupationSpecific = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media ${theme.media.mobile} {
        gap: 20px;
    }

    &:after {
        content: "";
        display: inline-block;
        width: 80%;
        text-align: center;
        border-bottom: 1px solid ${theme.colors.footer.secondColor};
        padding-top: 20px;
    }
`

const TextTitle = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${theme.colors.fontDark};
`