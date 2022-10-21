import React from 'react';

import * as Sc from './styles';

interface Category {
  name: string;
  icon: string;
}

interface Data {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: Data
}

export function TransactionCard({ data }: Props) {
  return (
    <Sc.Container>
      <Sc.Title>
        {data.title}
      </Sc.Title>
      <Sc.Amount>
        {data.amount}
      </Sc.Amount>

      <Sc.Footer>
        <Sc.Category>
          <Sc.Icon name="dollar-sign" />
          <Sc.CategoryName>
            {data.category.name}
          </Sc.CategoryName>
        </Sc.Category>

        <Sc.Date>
          {data.date}
        </Sc.Date>
      </Sc.Footer>
    </Sc.Container>
  )
}