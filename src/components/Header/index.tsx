import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt="dt money" />
           <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}
