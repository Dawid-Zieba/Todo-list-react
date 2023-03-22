import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap:10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    ${({ hidden }) => hidden && css`
    display: none;
    `} 
`;

export const Content = styled.span`
${({ done }) => done && css`
    text-decoration: line-through;
`}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: green;
    border: none;
    margin: 10px;
    padding:0;
    flex-shrink: 0;
    font-size: 20px;
    color: white;
    transition: background 1s;
    ${({toggleDone}) =>toggleDone && css`
    background: hsl(120, 100%, 30%);
    &:hover {
        background: hsl(120, 61%, 39%);
    }
    `}
    ${({remove}) =>remove && css`
    background: hsl(348, 83%, 47%);
    &:hover {
        background: hsl(0, 27%, 31%);
    }
    `}
`;