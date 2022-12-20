import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Cookbook/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary',
};

export const Large = ButtonTemplate.bind({});
Large.args = {
  size: 'large',
  color: 'secondary',
  label: 'Large Secondary Button',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  size: 'small',
  color: 'primary',
  label: 'Small Primary Button',
};
