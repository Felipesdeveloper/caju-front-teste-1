import styled, { css } from 'styled-components';

export const Container = styled.div.attrs<{ $isShow: boolean }>(
  ({ $isShow }) => ({ 'aria-hidden': !$isShow }),
)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0;
  transform: scale(0.7);
  transform-origin: center center;
  transition: all 0.2s ease;

  ${({ $isShow }) =>
    $isShow &&
    css`
      opacity: 1;
      transform: scale(1);
      z-index: 1;
    `}
`;

export const Overlay = styled(Container)<{ $isShow: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const WrapperContent = styled.div<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 85%;
  max-height: 85%;
  width: 500px;
  height: 300px;
  background: #fff;
  overflow-y: auto;
  border-radius: 32px;
  padding: 32px;
  z-index: 3;
  transform: scale(0.7);
  opacity: 0;
  transform-origin: center center;
  transition: all 0.2s ease;

  h2 {
    color: #252525;
    font-size: 20px;
  }

  ${({ $isShow }) =>
    $isShow &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
