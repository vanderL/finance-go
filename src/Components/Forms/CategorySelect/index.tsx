import React from "react";

import * as Sc from './styles';

interface Props {
  title: string;
}

export function CategorySelect({ title }: Props) {
  return (
    <Sc.Container>
      <Sc.Category>
        {title}
      </Sc.Category>
      <Sc.Icon
        name="chevron-down"
      />
    </Sc.Container>
  )
}