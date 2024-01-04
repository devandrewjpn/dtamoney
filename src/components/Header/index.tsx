import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

import logoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
