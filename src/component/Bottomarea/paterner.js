import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';    



const useStyles = makeStyles({
    root: {
         
    },
    line:{
      borderBottomStyle:'solid',
      borderBottomWidth:'thin',
      marginTop:'5px',
    },
    first:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:'25px',
    }
});

const Parter = () => {
    const classes = useStyles();
    return ( 
        <div>
        <Box style={{padding:'15px',background:'#eeeeee'}}>
         <Typography variant="h6" color="initial"> Partners</Typography>
         <div className={classes.line}></div>
         <div className={classes.first}>
         <Avatar > <WorkIcon  /></Avatar>
         <div style={{paddingLeft:'5px'}}>
             <Typography variant="body1" color="initial">Become a Partner</Typography>
             <Typography variant="body2" color="initial">Contact Us</Typography>
         </div>
         </div>
         </Box>
        </div>
     );
}
 
export default Parter;