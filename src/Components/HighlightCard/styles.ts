import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

interface TypeProps {
  type: 'up' | 'down' | 'total';

}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.COLORS.SECONDARY : theme.COLORS.SHAPE
  };

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TEXT_DARK
  };

`;

export const Icon = styled(Feather) <TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.COLORS.SUCCESS};
  `};
  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.COLORS.ATTENTION};

  `};
  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.COLORS.SHAPE};
  `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TEXT_DARK
  };
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.COLORS.SHAPE : theme.COLORS.TEXT
  };


`;


