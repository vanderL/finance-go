import React from 'react';
import { TextInputProps } from 'react-native';

import * as Sc from './styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return (
    <Sc.Container {...rest}>

    </Sc.Container>
  )
}