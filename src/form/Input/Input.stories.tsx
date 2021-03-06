import React from 'react';

import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Test placeholder"
};

export const Rounded = Template.bind({});
Rounded.args = {
  placeholder: "Rounded",
  style: {borderRadius: '1rem'}
};
