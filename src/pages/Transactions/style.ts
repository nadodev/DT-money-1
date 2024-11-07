import styled from "styled-components";


export const TransactionsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 2rem auto 0;
    padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;


    th {
        color: ${props => props.theme['gray-300']};
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1.25rem 2rem;
        border: 0;
        background-color: ${props => props.theme['gray-700']};
        color: ${props => props.theme.white};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            color: ${props => props.theme['gray-300']};
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            color: ${props => props.theme['gray-300']};
        }
    }
`;

interface TransactionTypeProps {
    variant: "income" | "outcome";
}

export const PriceHightlight = styled.span<TransactionTypeProps>`
    color: ${props => props.variant === "income" ? props.theme['green-300'] : props.theme['red-300']};
`;