import styled from "styled-components";

export const TextHead = () => {
    return (<StyleTextHead>
            <h2>Hello!</h2><p>I’m Anton Karko</p>
        </StyleTextHead>
    );
};
const StyleTextHead = styled.div`
    //width: 735px;
    color: #FFFFFF;
    
    h2,p {
        //font-family: Playfair Display;
        font-weight: 700;
        //font-style: Bold;
        font-size: 90px;
        //leading-trim: NONE;
        line-height: 120%;
        letter-spacing: 0;
    }
`