import React from "react";

import * as Sc from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Sc.Container onPress={onPress}>
      <Sc.Category>
        {title}
      </Sc.Category>
      <Sc.Icon
        name="chevron-down"
      />
    </Sc.Container>
  )
}