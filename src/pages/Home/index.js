import React, { useState } from 'react';
import {
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Filters from '../../components/Filters';
import FeaturedPlaylists from '../../components/FeaturedPlaylists';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Logo from '../../components/shared/Logo';
import useStyles from './styles';

const Home = props => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState({
    locale: 'pt_BR',
    country: 'BR',
    offset: 1,
    limit: 9,
    total: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Logo direction="column" />
      <Filters
        filters={filters}
        onFilters={values => setFilters(prevState => values)}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="transparent"
        elevation={0}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item>
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <div className={classes.menuButton}>
                <Logo direction="row" />
              </div>
            </Grid>

            <Grid item>
              <IconButton color="inherit">
                <PersonOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <FeaturedPlaylists filters={filters} />
      </main>
    </div>
  );
};

export default Home;
