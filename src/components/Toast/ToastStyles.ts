import styled, { css } from 'styled-components';
import { ToastType } from './ToastTypes';

export const Container = styled.div<{ $isShow: boolean; $variant: ToastType }>`
  position: fixed;
  bottom: -100px;
  left: 24px;
  padding: 16px;
  background: ${({ $variant }) =>
    $variant === 'success' ? ' #59d359' : '#313131'};
  width: 310px;
  color: #ffff;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: 0px 0px 12px #aeaeae;
  text-align: center;
  z-index: -1;
  opacity: 0;
  transition:
    bottom 0.4s linear,
    opacity 0.3s linear,
    z-index 0.3s linear 0.6s;

  p {
    margin: 0;
  }

  ${({ $isShow }) =>
    $isShow &&
    css`
      bottom: 16px;
      z-index: 3;
      opacity: 1;
      transition:
        bottom 0.4s linear,
        opacity 0.3s linear,
        z-index 0.3s linear;
    `}
`;
