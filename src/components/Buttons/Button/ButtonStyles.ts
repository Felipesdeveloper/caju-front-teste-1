import styled, { css, keyframes } from 'styled-components';
import { Props } from './ButtonTypes';

const RotationAnimation = keyframes`
  0% { transform: rotate(0deg);  }
  100% { transform: rotate(360deg); }
`;

export const Button = styled.button<{ $variant: Props['$variant'] }>`
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

  ${({ $variant = 'primary' }) => css`
    background-color: ${$variant === 'primary' ? '#64a98c' : '#252525'};
  `}
`;

export const WrapperLoading = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  animation: ${RotationAnimation} 1s linear infinite;
`;
