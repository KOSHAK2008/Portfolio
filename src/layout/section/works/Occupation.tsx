import styled from "styled-components";
import {BlockOccupation} from "./BlockOccupation.tsx";
import {theme} from "../../../styles/Theme.ts";

const dataEducation = [
    {
        title: "school",
        place: "№16",
        location: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon: "30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
        career: "offline",
    },
    {
        title: "school",
        place: "№16",
        location: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon: "30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
        career: "online",
    },
    {
        title: "school",
        place: "№16",
        location: "Lida, Masherova",
        date: "Sep 1997 - may 2006",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon: "30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
        career: "online",
    },
]
const dataExperience = [
    {
        title: "raillway",
        place: "RB",
        location: "Lida",
        date: "Sep 2006 - now",
        iconBuilding: "building",
        iconDate: "date",
        iconLocation: "location",
        heightIcon: "30",
        widthIcon: "30",
        viewBoxIconBuilding: "0 0 7 9",
        viewBoxIconDate: "0 0 12 9",
        viewBoxIconLocation: "0 0 12 12",
        career: "st osm rem vagonov",
    },
]

export const Occupation = () => {
    return (
        <StyledOccupation>
            <BlockOccupation data={dataExperience} title = {"Experience"}/>
            <BlockOccupation data={dataEducation} title = {"Education"}/>
        </StyledOccupation>
    );
};

const StyledOccupation = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    
    @media ${theme.media.tabletMedium} {
        flex-direction: column;
        align-items: center;
    }
`
