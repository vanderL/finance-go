import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.COLORS.SUCCESS : theme.COLORS.ATTENTION};

  margin-top: ${RFValue(2)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};

  margin-left: ${RFValue(17)}px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};

`;