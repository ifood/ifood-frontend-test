import React from 'react';

import Select from '.';

import { filterResponseMock } from '../../../services/utils/mocks/filter.response';

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
      defaultValue: 'Click',
      id: 'id-test',
      values: filterResponseMock[0].values
    },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Click',
  id: 'id-test',
  values: filterResponseMock[0].values
};