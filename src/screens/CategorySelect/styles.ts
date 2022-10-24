import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(19)}px;
  
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.View`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TEXT};

`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
