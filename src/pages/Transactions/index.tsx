import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
    PriceHightlight, TransactionsContainer, TransactionsTable
} from "./style";
import { currencyFormatter, dateFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
    const transactions  = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        <PriceHightlight variant={transaction.type}>
                                            {transaction.type === 'outcome' && '- '} {currencyFormatter.format(transaction.price)}
                                        </PriceHightlight>
                                    </td>
                                    <td>
                                        {dateFormatter.format(new Date(transaction.createdAt))}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

