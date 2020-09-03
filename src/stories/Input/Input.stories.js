import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  borderRadius: 20,
  size: 'medium',
  primary: true,
  label: 'Input',
};

export const Secondary = Template.bind({});
Secondary.args = {
  borderRadius: 5,
  size: 'small',
  primary:false,
  label: 'Input',
};