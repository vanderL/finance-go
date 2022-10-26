import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Input';

import * as Sc from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export function InputForm({
  control,
  name,
  error,
  ...rest
}: Props) {

  return (
    <Sc.Container>
      <Controller
        control={control}
        render={({
          field: { onChange, value }
        }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error &&
        <Sc.Error>
          {error}
        </Sc.Error>
      }
    </Sc.Container>
  );
}