import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SignUp from '../Signup/Signup';
import Login from   '../Login/Login';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          BPMSTEREO
          </Typography>
          
          <Link to="/signup"> 
          <Button type="button">
          SignUp
          </Button>
          </Link>

  
          
          <Link to="/login">
          <Button type="button">
           Login
          </Button>
          </Link>
    

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  Navbar;