import React from 'react';

import * as Sc from './styles';

interface Category {
  name: string;
  icon: string;
}

interface Data {
  type: 'positive' | 'negative';
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
      <Sc.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Sc.Amount>

      <Sc.Footer>
        <Sc.Category>
          <Sc.Icon name={data.category.icon} />
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