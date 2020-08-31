import React from 'react';

import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: 'Title Card',
    description: 'Description of the card',
    href: 'https://www.ifood.com.br/'
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title Card',
  description: 'Description of the card',
  href: 'https://www.ifood.com.br/'
};
