import styled from "styled-components";

export const MainMobile = styled.div `
    background-color: ${ props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.info};
    border-right: 1px solid ${ props => props.theme.colors.gray };
   
`
