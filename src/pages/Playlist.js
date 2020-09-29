import React from 'react';
import clsx from 'clsx';
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
import logoIfood from '../Logo/ifood-logo-png.png';
import Filters from '../components/Filters/Filters';
import ListPlaylists from '../components/ListPlaylists';
import './Playlist.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240; //importante, mudar.

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#FFFF'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
        flexDirection: 'column',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-end',
        width: '100%',
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        paddingTop: theme.spacing(10),
        justifyContent: 'center',
        display: 'flex',
        paddingRight: '5px',
        paddingLeft: '5px'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


function Playlists(props) {
    const { handleLogout } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
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
                <Toolbar className={classes.appToolbar}>
                    <IconButton
                        color="#EA1D2C"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        <img src={logoIfood} />
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    {drawer}
                </Drawer>

            </nav>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div className={classes.drawerHeader}>
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
