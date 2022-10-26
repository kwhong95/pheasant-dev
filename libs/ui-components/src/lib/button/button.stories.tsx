import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
    variant: {
      name: 'Variants',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary',
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
      defaultValue: 'md',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const PrimaryButton = Template.bind({});

export const SecondButton = Template.bind({});

SecondButton.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'md',
};
