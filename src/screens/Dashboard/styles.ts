import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, FlatListProps } from 'react-native';
import { DatalistProps } from ".";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  align-items: center;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 24px;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};

  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.BOLD};

  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color:  ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  margin-bottom: ${RFValue(16)}px;
`;

export const TransactionsList = styled(
  FlatList as new (props: FlatListProps<DatalistProps>) => FlatList<DatalistProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})``;