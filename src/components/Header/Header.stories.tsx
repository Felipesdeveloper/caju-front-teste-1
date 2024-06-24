import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { Props } from './HeaderTypes';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    children: <h1>Teste</h1>,
  },
};
