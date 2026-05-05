import {CardOccupation} from "./CardOccupation.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

const data = [
    {
        title: "school",
        place: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        icon: "computer",
        heightIcon:"30",
        widthIcon: "30",
        viewBoxIcon: "0 0 21 23",
    },
    {
        title: "school",
        place: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        icon: "computer",
        heightIcon:"30",
        widthIcon: "30",
        viewBoxIcon: "0 0 21 23",
    },
]

export const BlockOccupation = () => {
    return (
        <FlexWraper justify={"space-around"} direction={"column"}>
            <CardOccupation dataExperience={data}/>
            {/*<CardOccupation title={"UI/UX Designer"} icon={"paint"} height={"30"} width={"30"} viewBox={"0 0 29 29"}/>*/}
            {/*<CardOccupation title={"Branding Designer"} icon={"thunder"} height={"30"} width={"30"}*/}
            {/*                viewBox={"0 0 23 27"}/>*/}
        </FlexWraper>
    );
};

