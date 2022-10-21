import * as Sc from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Sc.Container type={type}>
      <Sc.Header>
        <Sc.Title type={type}>
          {title}
        </Sc.Title>
        <Sc.Icon
          name={icon[type]}
          type={type}
        />
      </Sc.Header>

      <Sc.Footer>
        <Sc.Amount type={type}>
          {amount}
        </Sc.Amount>
        <Sc.LastTransaction type={type}>
          {lastTransaction}
        </Sc.LastTransaction>
      </Sc.Footer>
    </Sc.Container>
  )
}