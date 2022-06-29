import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,Button} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        "& .MuiTableCell-root": {
            borderLeft: "2px solid #FF869E",
            padding:"10px",
        },
        minWidth: 550,
    },
    row:{
        borderBottom:"1px solid #FF869E",fontWeight:"bolder",color:"white"
    }
});

export default function TableView({usersList,setUsersList}) {
    const classes = useStyles();
   

    const removeUser=(event)=>{
        let attrId = event.target.getAttribute('data-target')
        let isOk=window.confirm("Are you sure to remove the user?")
        console.log(isOk)
        if(isOk){
            setUsersList(usersList.filter((list)=>
                list.id !== parseInt(attrId)
            ));
        }
    }
    
    return (
        <TableContainer component={Paper}>
            {usersList.length!==0 ? 
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{backgroundColor:"#FF869E"}}>
                        <TableRow>
                            <TableCell className={classes.row} align="center">#</TableCell>
                            <TableCell className={classes.row} align="center">User</TableCell>
                            <TableCell className={classes.row} align="center">Last Signed In</TableCell>
                            <TableCell className={classes.row} align="center">Role</TableCell>
                            <TableCell className={classes.row} align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    usersList.map((row,index) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" align="center" scope="row">
                                        {index+1}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.email}
                                    </TableCell>
                                    <TableCell align="center"><LastActive dateId={row.id}/></TableCell>
                                    <TableCell align="center">{row.role}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" color="primary" onClick={removeUser} data-target={row.id} className={classes.button}
                                            style={{backgroundColor:"transparent",borderRadius:"20px"}}
                                            startIcon={<DeleteIcon data-target={row.id} />}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                    </TableBody>
                </Table>
                :
                <p style={{textAlign:"center",fontSize:"20px"}}>
                    No users found
                </p>
            }
        </TableContainer>
    );
}

function LastActive({dateId}){
    const [days,setDays]=useState("")
     useEffect(()=>{
        convertToDay()
    },[])

    const lastSeenCalculation=(date)=>{
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    const convertToDay=()=>{
        let timeZone=new Date(Number(dateId))
        let getDays=lastSeenCalculation(timeZone)
        setDays(getDays)
    }
    return(
        <span>{days}</span>
    )
}
