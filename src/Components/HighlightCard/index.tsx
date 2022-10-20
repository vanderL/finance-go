import * as Sc from './styles';

export function HighlightCard() {
  return (
    <Sc.Container>
      <Sc.Header>
        <Sc.Title>
          Entrada
        </Sc.Title>
        <Sc.Icon name="arrow-up-circle" />
      </Sc.Header>

      <Sc.Footer>
        <Sc.Amount>
          R$ 17.400,00
        </Sc.Amount>
        <Sc.LastTransaction>
          Última entrada dia 13 de abril
        </Sc.LastTransaction>
      </Sc.Footer>
    </Sc.Container>
  )
}