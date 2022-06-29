import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Popup from '../Forms/Popup';
import TableView from './TableView';
import PersonAddIcon from '@material-ui/icons/PersonAdd'

export default function Settings() {
    const [open, setOpen] = useState(false);
    const [usersList,setUsersList]=useState([])

    useEffect(() => {  
        checkUserStorage();
    }, [])

    useEffect(()=>{
        localStorage.setItem("HelloAR_Lists",JSON.stringify(usersList))
        checkUserStorage()

    },[usersList,setUsersList])

    const checkUserStorage=()=>{
        let userStorage=JSON.parse(localStorage.getItem("HelloAR_Lists"))
        let isStorageAlreadyAvailable=userStorage.length
        if(isStorageAlreadyAvailable>0){
            let usersLocalStorage=userStorage;
            setUsersList(usersLocalStorage);
            localStorage.setItem("HelloAR_Lists",JSON.stringify(usersLocalStorage));
        }
        else{
            localStorage.setItem("HelloAR_Lists",JSON.stringify([]));
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button startIcon={<PersonAddIcon />} variant="contained" style={{margin:"10px 0",backgroundColor:"#FF869E",color:"white"}} onClick={handleClickOpen}>
                ADD USER
            </Button>
            <TableView usersList={usersList} setUsersList={setUsersList} />
            <Popup handleClose={handleClose} open={open} usersList={usersList} setUsersList={setUsersList} />
        </div>
    );
}
