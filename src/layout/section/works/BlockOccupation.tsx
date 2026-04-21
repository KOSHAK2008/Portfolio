import {CardOccupation} from "./CardOccupation.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const BlockOccupation = () => {
    return (
        <FlexWraper justify={"space-around"}>
            <CardOccupation title={"Front End Developer"} icon={"computer"} height={"30"} width={"30"}
                            viewBox={"0 0 30 30"}/>
            <CardOccupation title={"UI/UX Designer"} icon={"paint"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
            <CardOccupation title={"Branding Designer"} icon={"thunder"} height={"30"} width={"30"}
                            viewBox={"0 0 30 30"}/>
        </FlexWraper>
    );
};

