import styled from "styled-components";
export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewTransactionButton = styled.button`

    height: 50px;
    border: 0;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme['green-500']};
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        transition: background-color 0.2s;
        background-color: ${props => props.theme['green-700']};
    }
`;