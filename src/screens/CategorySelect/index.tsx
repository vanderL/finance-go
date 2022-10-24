import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../Components/Forms/Button";
import { categories } from "../../utils/categories";

import * as Sc from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect(
  { category, closeSelectCategory, setCategory }: Props
) {
  return (
    <Sc.Container>
      <Sc.Header>
        <Sc.Title>Categoria</Sc.Title>
      </Sc.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Sc.Category>
            <Sc.Icon
              name={item.icon}
            />
            <Sc.Name>
              {item.name}
            </Sc.Name>
          </Sc.Category>
        )}
        ItemSeparatorComponent={() => <Sc.Separator />}
      />

      <Sc.Footer>
        <Button
          title="Selecionar"
        />
      </Sc.Footer>
    </Sc.Container>
  )
}