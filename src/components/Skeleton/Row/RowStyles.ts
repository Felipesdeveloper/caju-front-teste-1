import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% { opacity: 0;  }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

export const Animate = styled.div`
  animation: ${opacityAnimation} 0.7s linear infinite;
`;
