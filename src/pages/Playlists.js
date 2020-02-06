import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  useTheme,
  Drawer,
  Hidden,
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  List,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Filters from '../components/Filters';
import ListPlaylists from '../components/ListPlaylists';
import './Playlists.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    width: '100%',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
    justifyContent: 'center',
    display: 'flex',
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  logoutButton: {
    margin: '20px',
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
  },
}));


function Playlists(props) {
  const { handleLogout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawerContent}>
      <div className={classes.toolbar} />
      <Filters />
      <List className={classes.logoutButton}>
        <Button
          onClick={handleLogout}
          variant="contained"
          color="primary"
          fullWidth
        >
          Sair
        </Button>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SpotiFood
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <ListPlaylists />
        </div>
      </main>
    </div>
  );
}

Playlists.propTypes = {
  handleLogout: PropTypes.object.isRequired,
};

export default Playlists;
