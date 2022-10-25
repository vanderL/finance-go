import React from "react";

import { TouchableOpacityProps } from 'react-native';

import * as Sc from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Sc.Container {...rest}>
      <Sc.Title>
        {title}
      </Sc.Title>
    </Sc.Container>
  )
}