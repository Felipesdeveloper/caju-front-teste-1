import styled from 'styled-components';
import { Button as ButtonIconStyles } from '@/components/Buttons/Icon/ButtonIconStyles';
import { Button as ButtonStyles } from '@/components/Buttons/Button/ButtonStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  border: 2px solid #f0f0f0;
  width: 500px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${ButtonIconStyles} {
    margin-bottom: 8px;
    align-items: flex-start;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${ButtonStyles} {
      align-self: flex-end;
    }
  }
`;
