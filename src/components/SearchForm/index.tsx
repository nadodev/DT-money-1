import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});


type SeachFormType = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const  fetchTransactions  = useContextSelector(TransactionsContext, (contexto) => {
    return contexto.fetchTransactions
  });
  
    const  { 
      register, 
      handleSubmit, 
      formState: { isSubmitting } 
    } = useForm<SeachFormType>({
    resolver: zodResolver(searchFormSchema),
  });

 async function handleTransactionSearch(data: SeachFormType) {
  
 
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleTransactionSearch)}>
        <input type="text" placeholder="Buscar por transações"  { ...register("query") } />
        <button type="submit" disabled={isSubmitting}>
            <MagnifyingGlass size={20} />
            Buscar</button>
    </SearchFormContainer>
  )
}
