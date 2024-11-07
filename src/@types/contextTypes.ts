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
}


export interface TransactionsProviderProps {
    children: React.ReactNode;
}