import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 15px;
    align-content: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
padding:15px;
border:1 solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    background:${({ theme }) => theme.color.teal};
    color:${({ theme }) => theme.color.white};
    border: none;
    border-radius: 2px;
    padding: 8px;
    transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    &:hover {
    filter:brightness(110%);
    transform: scale(1.1);
    }
    &:active {
        filter: brightness(120%);
    }
`;
