import styled from "styled-components";





export const Container = styled.div `
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.div `
    display: flex;
    align-items: center;
    font-size: larger;
`;
export const LogImg = styled.img `

`;

export const Title = styled.h3 `
    color: ${props => props.theme.colors.white};
`;
export const MenuContainer = styled.div `
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 30px ;
    gap: 20px;

`;
export const MenuItemLink = styled.a `
    text-decoration: none;
    color: ${props => props.theme.colors.info};
    cursor: pointer;
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    display: flex;
    align-items: center;
    gap: 5px;
`;