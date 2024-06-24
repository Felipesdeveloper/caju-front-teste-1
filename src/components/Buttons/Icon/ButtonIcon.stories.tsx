import type { Meta, StoryObj } from '@storybook/react';
import { HiX } from 'react-icons/hi';
import Button from './ButtonIcon';
import { Props } from './ButtonIconTypes';

const meta: Meta<typeof Button> = {
  title: 'Example/Buttons/ButtonIcon',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Aceita como filho qualquer um dos icones do react-icons',
      },
    },
  },
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    children: <HiX />,
  },
};
