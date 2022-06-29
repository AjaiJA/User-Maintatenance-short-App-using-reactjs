import React,{useState} from 'react'
import {Button,Dialog,MenuItem,TextField} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {useStyles} from './../../Styles/styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const roles = [
    {
        value: 'admin',
        label: 'Admin',
    },
    {
        value: 'owner',
        label: 'Owner',
    },
    {
        value: 'sales',
        label: 'Sales',
    }
];


export default function Popup({handleClose,open,usersList,setUsersList}) {
    const classes = useStyles();
    const [role, setRole] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [alertDisplay,setAlertDisplay]=useState("none")
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [errMsg,setErrMsg]=useState("")
    let view=true

    const handleSnackbarClick = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') return
        setSnackbarOpen(false);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
    
    const emailInputChange=(event)=>{
        setEmailInput(event.target.value)
    }

    const addUser=(event)=>{
        let emailRegex = /^[A-Za-z0-9_\.\-]+\@(([A-Za-z0-9\-])+\.)+([A-Za-z0-9]{2,4})+$/
        if(emailInput!=="" && role!==""){
            if(emailInput.match(emailRegex)){
                let userAdd=[...usersList,{id:Date.now(),email:emailInput,role:role}]
                setUsersList(userAdd);
                setEmailInput('')
                setRole('')
                handleSnackbarClick()
                setAlertDisplay("none")
                localStorage.setItem("HelloAR_Lists",JSON.stringify(userAdd));
            }
            else{
                setErrMsg("Email is Invalid")
                setAlertDisplay("flex")
            }
        }
        else{
            setErrMsg("Field is Empty!")
            setAlertDisplay("flex")
        }
    }

    return (
        <Dialog fullWidth={view} maxWidth="md" open={open} onClose={handleClose} keepMounted>
            <Grid container>
                <Grid item lg={5} xs={5} sm={5} style={{backgroundColor:"#FF869E"}}>
                    <Paper className={classes.paper1} style={{background:"transparent"}}>
                        <div className={classes.details}>
                            <div>
                                <PersonAddIcon style={{fontSize:"100px",color:"white"}} />
                            </div>
                            <div>
                               <p style={{color:"white",textAlign:"justify"}}> A paraphrase is a restatement of the meaning of a text or passage using other words. The term itself is derived via Latin paraphrasis, from Ancient Greek παράφρασις 'additional manner of expression'. The act of paraphrasing is also called paraphrasis.</p>
                            </div>
                        </div>   
                    </Paper>
                </Grid>
                <Grid item lg={7} xs={7} sm={7}>
                    <Paper style={{boxShadow:"none"}}>
                        <CardContent className={classes.content}>
                            <div>
                                <Alert severity="error" className="error-msg" style={{display:alertDisplay}}>{errMsg}</Alert>
                                <h3 style={{textAlign: 'left'}}>User Information</h3><br/>
                                <form>
                                    <TextField id="outlined-full-width" label="Email ID of User" style={{ margin: 8 }} fullWidth margin="normal" 
                                        InputLabelProps={{
                                            shrink: true,
                                        }} onChange={emailInputChange} value={emailInput} variant="outlined" /><br/><br/>
                                    <TextField id="outlined-full-width" label="Role" style={{ margin: 8 }} fullWidth margin="normal" value={role} select
                                        InputLabelProps={{
                                            shrink: true,
                                        }} 
                                        onChange={handleRoleChange} variant="outlined"
                                    >
                                        {roles.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <div style={{marginTop:"30px",display:"flex",justifyContent:"space-around"}}>
                                        <Button variant="contained" onClick={handleClose} style={{backgroundColor:"#F44336",color:"white"}}>
                                            Cancel
                                        </Button>
                                        <Button onClick={addUser} variant="contained" style={{backgroundColor:"#4CAF50",color:"white"}}>
                                            Add
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    User Added Successfully!
                </Alert>
            </Snackbar>
        </Dialog>
    );
}
