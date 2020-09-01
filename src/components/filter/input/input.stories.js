import React from 'react';

import Input from '.';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
      id: 'id-test',
      type: 'text'
    },
};

const Template = (args) => <Input {...args} />;

export const DefaultText = Template.bind({});
DefaultText.args = {
  defaultValue: 'Default Value',
  id: 'id-test',
  type: 'text'
};

export const DefaultNumber = Template.bind({});
DefaultNumber.args = {
  defaultValue: 1,
  id: 'id-test',
  type: 'number',
  min: 0,
  max: 10,
};