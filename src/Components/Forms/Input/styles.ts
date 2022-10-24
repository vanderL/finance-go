import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(18)}px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
  border-radius: 5px;
  margin-bottom: 8px;
`;