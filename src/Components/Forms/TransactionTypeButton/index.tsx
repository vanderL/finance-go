import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import * as Sc from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down'
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ type, title, isActive, ...rest }: Props) {
  return (
    <Sc.Container
      {...rest}
      isActive={isActive}
      type={type}
    >
      <Sc.Icon name={icons[type]} type={type} />
      <Sc.Title>
        {title}
      </Sc.Title>
    </Sc.Container>
  )
}