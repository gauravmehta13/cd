import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalAtmSharpIcon from '@material-ui/icons/LocalAtmSharp';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import GroupIcon from '@material-ui/icons/Group';
import Button from '@material-ui/core/Button';
import yellow from "@material-ui/core/colors/yellow";
import InfoIcon from '@material-ui/icons/Info';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAppContext } from '../libs/contextLibs'

import {
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import Help from '@material-ui/icons/Help';
import { Auth } from 'aws-amplify';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        fontWeight:"bold"
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    linkDefault: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    containedPurple: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[800],
        "&:hover": {
          backgroundColor: yellow[900],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: yellow[500]
          }
        }
      },
}));

function Dashboard() {
    const list = [
      { title: "Dashboard", to: "/", icon: <DashboardIcon /> },
    //   {
    //     title: "My WorkList",
    //     to: "/TaskManager",
    //     icon: (
    //       // <Badge badgeContent={5} color="secondary">
    //       <AssignmentIcon />
    //       // </Badge>
    //     ),
    //   },
      { title: "My Orders", to: "/myorders", icon: <AddShoppingCartIcon /> },
      {
        title: "Price Calculator",
        to: "/price-calculator",
        icon: <LocalAtmSharpIcon />,
      },
      {
        title: "Inventory Manager",
        to: "/inventory-manager",
        icon: <OpenInBrowserIcon />,
      },
      { title: "User Manager", to: "/userManager", icon: <GroupIcon /> },
      // {title:'KYC', to : '/kyc' , icon:<InfoIcon />},
      { title: "KYC", to: "/kycPanel", icon: <InfoIcon /> },
      { title: "Preference", to: "/preference", icon: <LabelImportantIcon /> },
      { title: "Help", to: "/help", icon: <Help /> },
    ];
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [menuOpen,setMenuOpen] = React.useState(false);
    const [anchorEl,setAnchorEl] = React.useState(null);
    const { userHasAuthenticated } = useAppContext();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event) => {
        setMenuOpen(!menuOpen);
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setMenuOpen(!menuOpen);
        setAnchorEl(null);
      };
      
      const handleLogout = () => {
          handleClose()
        try {
             Auth.signOut({ global: true });
            userHasAuthenticated(false)
            
        } catch (error) {
            console.log('error signing out: ', error);
        }
      }
    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <Link to='/' variant="h6" style={{color:'#fff',textDecoration:'none'}}>GoFlexe</Link>
          </Typography> 
          <Button
          variant="contained"
            component={Link}
            className={` AllButtons`}
            style={{marginRight:'10px'}}
            to='/orders'
          >NEW ORDER</Button>
          
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{width:'35',height:'35'}} />
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                style={{marginTop:'50px',maxWidth:'1400px'}}
                open={menuOpen}
                onClose={handleClose}
              >
                <Button
                    component={Link}
                    to='/profile'
                    fullWidth
                    onClick={handleClose}
                    variant='text'
                >My Profile</Button>
                <Divider />
                <Button
                    onClick={handleLogout}
                    fullWidth
                >
                    Logout
                </Button>
                <Divider />
                <Button
                    onClick={handleLogout}
                    fullWidth
                >
                    Change Password
                </Button>
              </Menu>
           
           
           
           

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {list.map((item, pos) => (
            <Link
              key={pos}
              to={{ pathname: item.to }}
              className={classes.linkDefault}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          ))}
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}
export default withRouter(Dashboard)