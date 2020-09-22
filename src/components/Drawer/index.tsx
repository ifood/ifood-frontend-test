import React, { memo } from 'react';

import MaterialDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import { Container, useStyles } from './styles';

interface DrawerProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ mobileOpen, setMobileOpen, children }) => {
  const classes = useStyles();

  return (
    <Container>
      <Hidden mdUp implementation="js">
        <MaterialDrawer
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {children}
        </MaterialDrawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <MaterialDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {children}
        </MaterialDrawer>
      </Hidden>
    </Container>
  );
};

export default memo(Drawer);
