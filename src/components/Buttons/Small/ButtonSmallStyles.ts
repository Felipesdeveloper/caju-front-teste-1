import styled from 'styled-components';
import { PropsStyles } from './ButtonSmallTypes';

export const Button = styled.button<PropsStyles>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.bgcolor ?? 'none'};
  color: ${(props) => props.color ?? '#000'};
  cursor: pointer;
`;
