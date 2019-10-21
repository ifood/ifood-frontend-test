import React from 'react'
import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import FieldContainer from './FieldContainer';


describe('<FieldContainer />', () => {

  it('Should render with label tag', () => {
    const elem = mount(<FieldContainer name="Field Label" />);
    expect(elem.exists('label')).toBeTruthy();
    expect(elem.find('label').text()).toBe('Field Label');
  });

  it('Should render without the label tag', () => {
    const elem = mount(<FieldContainer />);
    expect(elem.exists('label')).toBeFalsy();
  });

});

