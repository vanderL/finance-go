import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: 'up' | 'down'
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down'

}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 5px;

  padding: ${RFValue(16)}px ${RFValue(34)}px;

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.COLORS.ATTENTION_LIGHT};
  `};

  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.COLORS.SUCCESS_LIGHT};
  `};
`;

export const Icon = styled(Feather) <IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;


  color: ${({ theme, type }) =>
    type === 'up' ? theme.COLORS.SUCCESS : theme.COLORS.ATTENTION
  };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
`;
