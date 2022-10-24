import React from "react";

import { Button } from "../../Components/Forms/Button";
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
        <Sc.Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />
        </Sc.Fields>

        <Button
          title="Enviar"
        />
      </Sc.Form>
    </Sc.Container>
  )
}