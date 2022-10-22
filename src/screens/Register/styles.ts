import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  width: 100%;
  height: ${RFValue(133)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(18)}px;

`;