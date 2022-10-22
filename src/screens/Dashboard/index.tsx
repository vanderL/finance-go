import React from 'react';

import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../Components/TransactionCard';

import * as Sc from './styles';

export interface DatalistProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Trabalho', icon: 'dollar-sign'
      },
      date: '08/03/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hambuguer',
      amount: 'R$ 2.000,00',
      category: {
        name: 'Alimentação', icon: 'coffee'
      },
      date: '12/03/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do Apto',
      amount: 'R$ 500,00',
      category: {
        name: 'Casa', icon: 'home'
      },
      date: '10/03/2022',
    }
  ]

  return (
    <Sc.Container>
      <Sc.Header>
        <Sc.UserContainer>
          <Sc.UserInfo>
            <Sc.Photo source={{ uri: 'https://avatars.githubusercontent.com/u/12676148?v=4' }} />
            <Sc.User>
              <Sc.UserGreeting>
                Olá,
              </Sc.UserGreeting>
              <Sc.UserName>
                Vander
              </Sc.UserName>
            </Sc.User>
          </Sc.UserInfo>

          <Sc.Icon name='power' />

        </Sc.UserContainer>


      </Sc.Header>

      <Sc.HighlightCards>
        <HighlightCard
          type="up"
          title='Entradas'
          amount='R$ 8.500,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saidas'
          amount='R$ 1.200,00'
          lastTransaction='Última saída dia 13 de abril'

        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 8.500,00'
          lastTransaction='1 a 6 de abril'

        />
      </Sc.HighlightCards>

      <Sc.Transactions>
        <Sc.Title>
          Listagem
        </Sc.Title>

        <Sc.TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionCard
              data={item}
            />
          )}

        />
        {/* */}
      </Sc.Transactions>
    </Sc.Container>
  )
}
