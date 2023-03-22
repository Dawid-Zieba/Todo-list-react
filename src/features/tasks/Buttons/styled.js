import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BoxButtons = styled.button`
    margin: 0 0 0 20px;
    color:${({theme}) => theme.color.teal};
    border: none;
    background-color: inherit;
    font-size: 15px;
    transition: 1s;
    margin-right: 10px;

    @media (max-width:${({theme}) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px; 
    }

    &:hover {
        color: ${({theme}) => theme.color.bondiBlue};
    }
    &:disabled {
        color: ${({theme}) => theme.color.silver};
    }

`;