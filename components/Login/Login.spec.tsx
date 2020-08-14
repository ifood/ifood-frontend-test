import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('Components', () => {
  describe('Login', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<Login />);

      expect(wrap.find('h1').text()).toBe('Spotifood');
      expect(wrap.find('button').text()).toBe('Fazer login com o Spotify');
    });
  });
});
