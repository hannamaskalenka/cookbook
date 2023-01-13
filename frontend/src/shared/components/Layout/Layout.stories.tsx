import { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Cookbook/Layout',
  component: Layout,
  parameters: {
    backgrounds: {
      default: 'green',
      values: [{ name: 'green', value: '#679278' }],
    },
  },
} as ComponentMeta<typeof Layout>;

const LayoutTemplate: ComponentStory<typeof Layout> = (args, { children }) => (
  <Layout>{children}</Layout>
);
export const Primary = LayoutTemplate.bind({});
Primary.args = {};
