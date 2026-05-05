import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

type CardOccupationPropsType = Array<
    {
        title: string,
        place: string,
        date?: string;
        icon?: string,
        heightIcon?: string,
        widthIcon?: string,
        viewBoxIcon?: string,
    }>

export const CardOccupation = (props: { dataExperience: CardOccupationPropsType }) => {
    return (
        <StyledCardOccupation>
            {props.dataExperience.map((item, index) => {
                return <CardOccupationSpecific key={index}>
                    <h3>{item.title}</h3>
                    <div>
                        <Icon iconId={item.icon} height={item.heightIcon} width={item.widthIcon}
                              viewBox={item.viewBoxIcon}/>
                        <h4>{item.place}</h4>
                    </div>
                    <div>
                        <Icon iconId={item.icon} height={item.heightIcon} width={item.widthIcon}
                              viewBox={item.viewBoxIcon}/>
                        <h4>{item.date}</h4>
                    </div>
                </CardOccupationSpecific>
            })}
            {/*// <CardOccupationSpecific>*/}
            {/*// <Icon iconId={props.icon} height={props.heightIcon} width={props.widthIcon} viewBox={props.viewBoxIcon}/>*/}
            {/*// <h4>{props.title}</h4>*/}
            {/*// </CardOccupationSpecific>*/}
        </StyledCardOccupation>
    );
};

const StyledCardOccupation = styled.div`
    height: 295px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${theme.colors.accent};
    padding: 30px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
        text-align: justify;
    }
`

const CardOccupationSpecific = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 105px;
    height: 90px;
`