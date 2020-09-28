import React from "react";
import { shallow } from 'enzyme';
import { Playlist } from './Playlist';

describe('Playlist component', () => {
  it('Renders without crashing', () => {
    const props = { id: 'id', name: 'name', amount: 10, image: 'image' };
    const wrapper = shallow(<Playlist {...props} />);
    expect(wrapper.find('img').prop('src')).toEqual(props.image);
    expect(wrapper.find('img').prop('alt')).toEqual(props.name);
    expect(wrapper.childAt(1).text().includes(props.name)).toBe(true);
    expect(wrapper.childAt(2).text().includes('10 musics')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders without crashing', () => {
    const props = { id: 'id', name: 'name', amount: 10, image: 'image', className: 'my-class' };
    const wrapper = shallow(<Playlist {...props} />);
    expect(wrapper.hasClass(props.className)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should handle the click on image', () => {
    window.alert = jest.fn();
    const callAlert = (props: any) => alert(JSON.stringify(props));
    const props = { id: 'id', name: 'name', amount: 10, image: 'image' };

    const wrapper = shallow(<Playlist {...props} onClick={callAlert} />);
    wrapper.find('img').simulate('click');
    expect(window.alert).toHaveBeenCalledWith(JSON.stringify(props));
  });

  it('Should handle the click on playlist name', () => {
    window.alert = jest.fn();
    const callAlert = (props: any) => alert(JSON.stringify(props));
    const props = { id: 'id', name: 'name', amount: 10, image: 'image' };

    const wrapper = shallow(<Playlist {...props} onClick={callAlert} />);
    wrapper.childAt(1).simulate('click');
    expect(window.alert).toHaveBeenCalledWith(JSON.stringify(props));
  });
});
