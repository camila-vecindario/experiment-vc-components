import React from 'react';

import Modal from './Modal';

export default {
  component: Modal,
  title: 'Modal',
};

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem vel provident! Totam corporis soluta odit cum ab dolorem, natus voluptatibus et voluptate omnis iusto magni pariatur optio modi mollitia."
};

