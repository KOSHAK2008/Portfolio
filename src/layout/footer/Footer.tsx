import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <TextFooter>Created by <span>Anton</span> All Reserved!</TextFooter>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: #533523;
`
const TextFooter = styled.small`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(180, 172, 172, 0.5);
    margin: 0;
`
