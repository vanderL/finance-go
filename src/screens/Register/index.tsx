import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Button } from "../../Components/Forms/Button";
import { CategorySelectButton } from "../../Components/Forms/CategorySelectButton";
import { InputForm } from "../../Components/Forms/InputForm";
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";

import { CategorySelect } from '../CategorySelect';

import * as Sc from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required("Meu fi cadê o nome?"),
  amount: Yup
    .number()
    .typeError("Ja viu numero com letra?")
    .positive("Ai meu deus compra negativa é?")
    .required("Tudo na vida tem um preço, informe ele")
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
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

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Sc.Container>
        <Sc.Header>
          <Sc.Title>
            Cadastro
          </Sc.Title>
        </Sc.Header>

        <Sc.Form>
          <Sc.Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="number-pad"
              error={errors.amount && errors.amount.message}
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
            onPress={handleSubmit(handleRegister)}
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
    </TouchableWithoutFeedback>
  )
}