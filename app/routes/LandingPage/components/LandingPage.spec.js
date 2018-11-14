import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

const windowSpy = jest.spyOn(window.location, 'replace').mockImplementation(() => { });

describe('Routes/LandingPage/components/LandingPage', () => {
  test('should render landing page', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('span').exists()).toBe(true);
  });

  test('should call window.replace on componentDidMount', () => {
    const wrapper = shallow(<LandingPage />)
    wrapper.instance().componentDidMount();
    expect(windowSpy).toHaveBeenCalled();
  });
});
