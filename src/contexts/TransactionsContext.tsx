import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";


export const TransactionsContext = createContext({} as TransactionsContextData);


interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}
export interface Transaction {
    id: number;
    description: string;
    category: string;
    price: number;
    type: 'income' | 'outcome';
    createdAt: string;
}

export interface TransactionsContextData {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export interface TransactionsProviderProps {
    children: React.ReactNode;
}


export function  TransactionsContextProvider({ children }: TransactionsProviderProps) {
        const [transactions, setTransactions] = useState<Transaction[]>([]);

        async function fetchTransactions(query?: string) {
          
            const response = api.get('/transactions', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                   q: query
                }
            });

            const { data } = await response;

            setTransactions(data);
        }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, price, category, type } = data;
        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date().toISOString()
        });

        setTransactions(state => [response.data, ...state]);
    }
      
        useEffect(() => {
          fetchTransactions();
        }, [])


    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}