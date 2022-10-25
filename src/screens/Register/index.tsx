import React, { useState } from "react";

import { Modal } from 'react-native';

import { Button } from "../../Components/Forms/Button";
import { CategorySelectButton } from "../../Components/Forms/CategorySelectButton";
import { Input } from "../../Components/Forms/Input";
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";

import { CategorySelect } from '../CategorySelect';

import * as Sc from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionsTypesSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Sc.Fields>

        <Button
          title="Enviar"
        />
      </Sc.Form>

      <Modal
        visible={categoryModalOpen}
      >
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Sc.Container>
  )
}