import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Props } from './ButtonTypes';

const meta: Meta<typeof Button> = {
  title: 'Example/Buttons',
  component: Button,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Nova Admisão',
  },
};
