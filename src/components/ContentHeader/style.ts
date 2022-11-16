import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;    
    
`;

export const Title = styled.div `
    >h1{
        color: ${props => props.theme.colors.white};
        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid #FF9716;
            
        }

    }

`;
    

export const Controllers = styled.div`
    display: flex;
    gap: 4px;
`
export const Modal = styled.div `
    background-color: ${props => props.theme.colors.secondary}
    



`