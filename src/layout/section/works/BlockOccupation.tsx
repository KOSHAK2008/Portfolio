import {CardOccupation} from "./CardOccupation.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

const data = [
    {
        title: "school",
        place: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon:"30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
    },
    {
        title: "school",
        place: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon:"30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
    },
    {
        title: "school",
        place: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon:"30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
    },
]

export const BlockOccupation = () => {
    return (
        <FlexWraper justify={"space-around"} direction={"column"}>
            <CardOccupation dataExperience={data}/>
        </FlexWraper>
    );
};

