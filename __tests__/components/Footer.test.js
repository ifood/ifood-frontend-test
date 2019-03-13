import React from 'react';
import Footer from '../../src/components/Footer';
import { shallow } from 'enzyme'

describe("Footer Component", () => {
  test("Footer", () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeTruthy();
  })
});
