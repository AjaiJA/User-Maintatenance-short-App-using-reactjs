import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    paper: {
        border:"none",
        boxShadow:"none"
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        border:"none",
        boxShadow:"none"
    },
    paper5:{
        padding:"0px"
    }
}));
export {useStyles}