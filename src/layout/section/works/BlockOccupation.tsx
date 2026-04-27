import {CardOccupation} from "./CardOccupation.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const BlockOccupation = () => {
    return (
        <FlexWraper justify={"space-around"}>
            <CardOccupation title={"Front End Developer"} icon={"computer"} height={"30"} width={"30"}
                            viewBox={"0 0 21 23"}/>
            <CardOccupation title={"UI/UX Designer"} icon={"paint"} height={"30"} width={"30"} viewBox={"0 0 29 29"}/>
            <CardOccupation title={"Branding Designer"} icon={"thunder"} height={"30"} width={"30"}
                            viewBox={"0 0 23 27"}/>
        </FlexWraper>
    );
};

