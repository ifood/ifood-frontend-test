import React from 'react';
import {
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Filters from '../../components/Filters';
import FeaturedPlaylists from '../../components/FeaturedPlaylists';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Logo from '../../components/shared/Logo';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = props => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Logo direction="column" />
      <Filters />
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
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
        <FeaturedPlaylists></FeaturedPlaylists>
      </main>
    </div>
  );
};

export default Home;
