import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '.';

export default {
  title: 'Cookbook/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const FooterTemplate: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Desktop = FooterTemplate.bind({});
Desktop.args = {};
