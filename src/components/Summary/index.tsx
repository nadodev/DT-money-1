import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./style";
import { currencyFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export  function Summary() {

  const summury = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
            <ArrowCircleUp  size={32} color="#00b37e"/>
        </header>
        <strong>
        { currencyFormatter.format(summury.income) } 
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
            <ArrowCircleDown  size={32} color="#f75a68"/>
        </header>
        <strong>
          {currencyFormatter.format(summury.outcome)}
        </strong>
      </SummaryCard>
      <SummaryCard className="highlight-background" variant="green">
        <header>
          <span>Total</span>
            <CurrencyDollar  size={32} color="#fff"/>
        </header>
        <strong>  {currencyFormatter.format(summury.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
