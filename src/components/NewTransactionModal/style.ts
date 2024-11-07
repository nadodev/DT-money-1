import * as  Dialog from "@radix-ui/react-dialog";
import * as  RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const NewTransactionContainer = styled.div``;


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
`;

export const Content = styled(Dialog.Content)`
    min-width:32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    z-index: 10000;
    left: 50%;
    transform: translate(-50%, -50%);


    form {
        margin-top: 2rem;
        display:flex;
        flex-direction: column;
        z-index: 1000;

        gap: 1rem;
    
        input {
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-300']};
            }
        }

        button[type="submit"] {
            padding: 1rem;
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            cursor: pointer;

            &:disabled {
                opacity: 0.2;
                cursor: not-allowed;
            }

            &:not(:disabled):hover {
                background-color: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }
    }
`;

export const Close = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    right: 1.5rem;
    cursor: pointer;
    line-height: 0;
    color: ${props => props.theme['gray-300']};
`;

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 0.5rem;

`;

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`

    background-color: ${props => props.theme['gray-700']};
    padding: 1rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme['gray-300']};
    cursor: pointer;
    font-weight: bold;

    svg {
        color: ${props => props.variant === 'income'  ? props.theme['gray-300'] : props.theme['red-300']};
    }

    &[data-state="unchecked"]:hover {
        background: ${props => props.theme['gray-600'] };
        transition: background-color 0.2s;
    }

   &[data-state="checked"] {
        background-color: ${props => props.variant === 'income'  ? props.theme['green-500'] : props.theme['red-500']};
        color: ${props => props.theme.white};

        svg {
            color: ${props => props.theme.white};
        }
    }
`;