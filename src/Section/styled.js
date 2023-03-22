import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({theme}) => theme.color.white};
    margin: 10px;
    box-shadow:0px 7px 29px 0px ${({theme}) => theme.color.black};
`;

export const Header = styled.header`
border-bottom: 1px solid ${({theme}) => theme.color.black};
display:grid;
grid-template-columns: auto auto;
grid-gap: 20px;
justify-content: space-between;
align-items: center;
padding: 10px;
@media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
}
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 800;
    padding-left: 15px;
    font-family: 'Lato', 'sans-serif';
`;

export const Body = styled.div`
padding: 20px;
`;