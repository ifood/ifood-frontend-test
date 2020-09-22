import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import MaterialDrawer from '@material-ui/core/Drawer';

import Drawer from '.';

describe('Drawer', () => {
  let component: ShallowWrapper;
  const setMobileOpen = jest.fn();

  beforeEach(() => {
    component = shallow(
      <Drawer mobileOpen={false} setMobileOpen={setMobileOpen}>
        <div className="drawer-content">Drawer content</div>
      </Drawer>,
    );
  });

  it('should render', () => {
    expect(component.find(MaterialDrawer).length).toEqual(2);
  });

  it('should open menu', () => {
    const { onClose } = component.find(MaterialDrawer).first().props();

    if (onClose) {
      onClose({}, 'backdropClick');
    }

    expect(setMobileOpen).toHaveBeenCalledTimes(1);
  });
});
