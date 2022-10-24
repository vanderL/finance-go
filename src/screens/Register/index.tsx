import React from "react";
import { Input } from "../../Components/Forms/Input";

import * as Sc from './styles';

export function Register() {
  return (
    <Sc.Container>
      <Sc.Header>
        <Sc.Title>
          Cadastro
        </Sc.Title>
      </Sc.Header>

      <Sc.Form>
        <Input
          placeholder="Nome"
        />
        <Input
          placeholder="Preço"
        />
      </Sc.Form>
    </Sc.Container>
  )
}