import styled from "styled-components";


export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;


        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }


    }
    button {
        border: 1px solid ${props => props.theme['green-300']};
        color: ${props => props.theme['green-300']};
        background-color: transparent;
        border-radius: 6px;
        color: ${props => props.theme.white};
        padding: 1rem;
        font-weight: bold;
        transition: background-color 0.2s;
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        align-items: center;

        &:disabled {
            opacity: 0.2;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background-color: ${props => props.theme['green-500']};
        }
    }



`;