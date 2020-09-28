import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { render, RenderResult } from '@testing-library/react';
import FilterInput, { Props } from "./index";

const mockProps: Props = {
  id: 'mock',
  name: 'Mock',
  onChange: jest.fn(),
};

describe('<FilterInput />', () => {
  it('Should render a text field', () => {
    const input: RenderResult = render(<FilterInput {...mockProps} />);
    expect(input.queryByLabelText(mockProps.id)).toBeDefined();
  });
});
