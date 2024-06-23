import styled, { css } from 'styled-components';
import { Props } from './ButtonTypes';

export const Button = styled.button<{ variant: Props['variant'] }>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  cursor: pointer;
  height: 56px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;

  ${({ variant = 'primary' }) => css`
    background-color: ${variant === 'primary' ? '#64a98c' : '#252525'};
  `}
`;
