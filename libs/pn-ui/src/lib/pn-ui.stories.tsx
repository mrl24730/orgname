import { Story, Meta } from '@storybook/react';
import { PnUi, PnUiProps } from './pn-ui';

export default {
  component: PnUi,
  title: 'PnUi',
} as Meta;

const Template: Story<PnUiProps> = (args) => <PnUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  test: false,
};
