import React from "react";
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<SearchBar placeholder="Pesquisar..." onSearch={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should handle the input event', () => {
    window.alert = jest.fn();
    const callAlert = (value: string) => alert(value);
    const wrapper = shallow(<SearchBar placeholder="Pesquisar..." onSearch={callAlert} />);
    const value = 'Changed';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(window.alert).toHaveBeenCalledWith(value);
  });
});