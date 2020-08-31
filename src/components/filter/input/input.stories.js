import React from 'react';

import Input from '.';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
      backgroundColor: { control: 'color' },
      id: 'id-test',
      type: 'text'
    },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultValue: 'Default Value',
    id: 'id-test',
    type: 'text'
};