import { Story, Meta } from '@storybook/react';
import { PihkUi, PihkUiProps } from './pihk-ui';

export default {
  component: PihkUi,
  title: 'PihkUi',
} as Meta;

const Template: Story<PihkUiProps> = (args) => <PihkUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  test: false,
};
