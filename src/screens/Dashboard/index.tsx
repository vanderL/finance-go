import React from 'react';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard } from '../../Components/TransactionCard';

import * as Sc from './styles';

export function Dashboard() {
  const data = [
    {
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'freelance', icon: 'dollar-sign'
      },
      date: '12/03/2022',
    },
    {
      title: 'Desenvolvimento de Aplicativo',
      amount: 'R$ 12.000,00',
      category: {
        name: 'freelance', icon: 'dollar-sign'
      },
      date: '12/03/2022',
    },
    {
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'freelance', icon: 'dollar-sign'
      },
      date: '12/03/2022',
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
          renderItem={({ item }) => (
            <TransactionCard
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
        {/* */}
      </Sc.Transactions>
    </Sc.Container>
  )
}
