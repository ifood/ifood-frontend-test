import React from "react";
import { shallow } from 'enzyme';
import { Profile } from './Profile';

describe('Profile component', () => {
  const profile = { avatar: 'image', name: 'Marcelo Jasek', username: 'marcjal', followers: 10 };

  it('Renders without crashing', () => {
    const wrapper = shallow(<Profile {...profile} />);
    expect(wrapper.find('img').prop('src')).toEqual(profile.avatar);
    expect(wrapper.find('img').prop('alt')).toEqual(profile.name);
    expect(wrapper.find('.profile__informations__name').text().includes(profile.name)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render in minimal format', () => {
    const wrapper = shallow(<Profile {...profile} minimal />);
    expect(wrapper.hasClass('profile--minimal')).toBe(true);
    expect(wrapper.find('.profile--minimal__avatar')).toHaveLength(1);
    expect(wrapper.find('.profile--minimal__informations')).toHaveLength(1);
    expect(wrapper.find('.profile--minimal__informations__name')).toHaveLength(1);
    expect(wrapper.find('.profile--minimal__informations__account')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
