import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Transaction, TransactionsContextData, TransactionsProviderProps } from "../@types/contextTypes";

export const TransactionsContext = createContext({} as TransactionsContextData);
export function  TransactionsContextProvider({ children }: TransactionsProviderProps) {
        const [transactions, setTransactions] = useState<Transaction[]>([]);

        async function fetchTransactions(query?: string) {
          
            const response = api.get('/transactions', {
                params: {
                   q: query
                }
            });

            const { data } = await response;

            setTransactions(data);
        }
      
        useEffect(() => {
          fetchTransactions();
        }, [])


    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}