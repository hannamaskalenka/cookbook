import { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Cookbook/Components/shared/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const LayoutTemplate: ComponentStory<typeof Layout> = (args, { children }) => (
  <Layout>{children}</Layout>
);
export const Primary = LayoutTemplate.bind({});
Primary.args = {};
