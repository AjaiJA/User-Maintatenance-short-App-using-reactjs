import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {List, ListItemIcon, ListItemText} from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category'
import MuiListItem from "@material-ui/core/ListItem";
import GroupIcon from '@material-ui/icons/Group';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

const ListItem = withStyles({
    root: {
        "&$selected": {
        backgroundColor: "#FF869E",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
        },
        "&$selected:hover": {
        backgroundColor: "#FF869F",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
        },
        "&:hover": {
        backgroundColor: "#FF869E",
        color: "white",
        "& .MuiListItemIcon-root": {
            color: "white"
        }
        }
    },
    selected: {}
})(MuiListItem);

export default function LeftSideNav() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem component={Link} to='/' button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} >
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                </ListItem>
                <ListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} >
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Demo Script" />
                </ListItem>
                <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} >
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>
                <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales Team" />
                </ListItem>
                <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} >
                    <ListItemIcon>
                        <OndemandVideoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Demo" />
                </ListItem>
                <ListItem component={Link} to='/settings' button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)} >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );
}
