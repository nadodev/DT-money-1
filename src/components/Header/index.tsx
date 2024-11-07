import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionModal from "../NewTransactionModal";
export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logoImg} alt="dt money" />
            <Dialog.Root>
                <Dialog.DialogTrigger asChild>
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </Dialog.DialogTrigger>
            <NewTransactionModal />
            </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
  )
}
