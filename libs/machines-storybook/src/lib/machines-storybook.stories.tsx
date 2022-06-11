import { Story, Meta } from '@storybook/react';
import {
  MachinesStorybook,
  MachinesStorybookProps,
} from './machines-storybook';

export default {
  component: MachinesStorybook,
  title: 'MachinesStorybook',
} as Meta;

const Template: Story<MachinesStorybookProps> = (args) => (
  <MachinesStorybook {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
