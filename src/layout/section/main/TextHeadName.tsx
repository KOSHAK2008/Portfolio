import styled from "styled-components";

export const TextHeadName = () => {
    return (<StyleTextHead>Hello! I’m Anton Karko
        </StyleTextHead>
    );
};
const StyleTextHead = styled.h2`
    width: 735px;
    font-weight: 700;
    font-size: 90px;
    line-height: 1.2;

    @media screen and (max-width: 850px) {
        &{
            width: 100%;
        }
    }

    @media screen and (max-width: 650px) {
        &{
            //width: 100%;
            font-size: 50px;
            margin-bottom: 50px;     
        }
    }
`