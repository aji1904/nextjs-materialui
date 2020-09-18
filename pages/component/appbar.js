import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { AcUnit, AirlineSeatReclineNormal, AccountBox,
} from '@material-ui/icons'

import {
  Hidden, Drawer, List, ListItemIcon, ListItem, ListItemText, Divider, 
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacingIcon: {
    marginRight: 5,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 'auto',
  },
  logo: {
    justifyContent: 'center',
    paddingTop: '-5px 0px 10px 0px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // list menu
  const list = (anchor) => (
    <div
      className={classes.list}
      role="Menu"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.root}>
        <List aria-label="logo">
          <ListItem className={classes.logo}>
            <img src="/src/img/logo.png" alt="logo" width={'80%'}/>
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="I G D" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AirlineSeatReclineNormal />
            </ListItemIcon>
            <ListItemText primary="RAWAT JALAN" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AirlineSeatReclineNormal />
            </ListItemIcon>
            <ListItemText primary="RAWAT INAP" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AirlineSeatReclineNormal />
            </ListItemIcon>
            <ListItemText primary="LABORATORIUM" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AirlineSeatReclineNormal />
            </ListItemIcon>
            <ListItemText primary="RADIOLOGI" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AirlineSeatReclineNormal />
            </ListItemIcon>
            <ListItemText primary="FARMASI" />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SIMRS KHANZA
          </Typography>

          <Hidden xsDown smDown>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>IGD</Button>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>RAWAT JALAN</Button>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>RAWAT INAP</Button>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>LAB</Button>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>RADIOLOGI</Button>
            <Button color="inherit"><AcUnit className={classes.spacingIcon}/>FARMASI</Button>
          </Hidden>

          <Hidden xlUp lgUp mdUp>
            {['top'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton 
                color="inherit" 
                aria-label="menu"
                onClick={toggleDrawer(anchor, true)} 
                >  
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>

      

    </div>
  );
}
