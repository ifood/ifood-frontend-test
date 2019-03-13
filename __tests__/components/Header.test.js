import React from 'react';
import Header from '../../src/components/Header';
import { shallow } from 'enzyme'

describe("Header Component", () => {
  test("Header", () => {
    const header = shallow(<Header />);
    expect(header).toBeTruthy();
  })
});
