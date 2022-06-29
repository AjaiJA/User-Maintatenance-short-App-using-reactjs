import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from './../../logo.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root":{
            padding:"0px",
            backgroundColor:"white",
            color:"black",
            boxShadow:"none"
        },
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TopNavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" style={{fontSize:"14px"}} className={classes.menuButton} color="inherit" aria-label="menu">
                        <img style={{width:"50px"}} src={logo} alt={logo} /> MY APPLICATION
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle /> <span style={{fontSize:"17px"}}>ajaija</span>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
