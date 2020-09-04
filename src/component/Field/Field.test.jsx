import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Field from './Field';

describe('<Field />', () => {
  it('snapshot', () => {
    const field = mount(
      <Field label="Field label" fieldId="id">
        <input />
      </Field>
    );
    jestExpect(toJson(field)).toMatchSnapshot();
  });
});
