import type { Meta, StoryObj } from '@storybook/react';
import Button from './ButtonSmall';
import { Props } from './ButtonSmallTypes';

const meta: Meta<typeof Button> = {
  title: 'Example/Buttons/ButtonSmall',
  component: Button,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    $bgcolor: 'rgb(255, 145, 154)',
    $color: '#fff',
    children: 'Reprovar',
  },
};
