import {ContactBth} from "../../../components/contact/Contact.tsx";
import {DownloadCv} from "../../../components/DownloadCv.tsx";
import {FlexWraper} from "../../../components/FlexWraper.tsx";

export const BoxBth = () => {
    return (
        <FlexWraper align ={"center"}>
            <ContactBth>Email me</ContactBth>
            <DownloadCv/>
        </FlexWraper>
    );
};
