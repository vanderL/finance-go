import React, { useState } from "react";

import { Button } from "../../Components/Forms/Button";
import { CategorySelect } from "../../Components/Forms/CategorySelect";
import { Input } from "../../Components/Forms/Input";
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";

import * as Sc from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <Sc.Container>
      <Sc.Header>
        <Sc.Title>
          Cadastro
        </Sc.Title>
      </Sc.Header>

      <Sc.Form>
        <Sc.Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />

          <Sc.TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypesSelect('up')}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypesSelect('down')}
              isActive={transactionType === "down"}
            />
          </Sc.TransactionsTypes>

          <CategorySelect
            title={'Categoria'}
          />
        </Sc.Fields>

        <Button
          title="Enviar"
        />
      </Sc.Form>
    </Sc.Container>
  )
}