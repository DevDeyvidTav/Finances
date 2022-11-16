import styled from "styled-components";

export const Container = styled.div `
    grid-area: MH;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};

    display: flex;

    justify-content: space-between;

    padding: 0 10px;

    align-items: center;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div ``;
export const Welcome = styled.h3 ``;
export const UserName = styled.span ``;