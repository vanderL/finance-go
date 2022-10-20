import React from 'react';
import { HighlightCard } from '../../Components/HighlightCard';

import * as Sc from './styles';

export function Dashboard() {
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

      <HighlightCard />
    </Sc.Container>
  )
}
