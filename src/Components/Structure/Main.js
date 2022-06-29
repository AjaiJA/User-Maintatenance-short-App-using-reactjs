import React from 'react'
import LeftSideNav from '../Nav/LeftSideNav'
import RightSideNav from '../Nav/RightSideNav'
import {Paper,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        boxShadow:"none"
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item xs={2} lg={2} md={3} sm>
                    <Paper className={classes.paper}>
                        <LeftSideNav />
                    </Paper>
                </Grid>
                <Grid item xs={10} lg={10} md={9} sm>
                    <Paper className={classes.paper}>
                        <RightSideNav />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
