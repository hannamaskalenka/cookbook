import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Cookbook/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
};

export const Large = ButtonTemplate.bind({});
Large.args = {
  size: 'large',
  type: 'secondary',
  label: 'Large Secondary Button',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  size: 'small',
  type: 'primary',
  label: 'Small Primary Button',
};
