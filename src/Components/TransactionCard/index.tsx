import React from 'react';

import * as Sc from './styles';

export function TransactionCard() {
  return (
    <Sc.Container>
      <Sc.Title>Desenvolvimento de Site</Sc.Title>
      <Sc.Amount>R$ 12.000,00</Sc.Amount>

      <Sc.Footer>
        <Sc.Category>
          <Sc.Icon name="dollar-sign" />
          <Sc.CategoryName>
            Vendas
          </Sc.CategoryName>
        </Sc.Category>

        <Sc.Date>13/04/2021</Sc.Date>
      </Sc.Footer>

    </Sc.Container>
  )
}