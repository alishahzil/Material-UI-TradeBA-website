import React from 'react';
import Latestnew from './latestnew';
import Parter from './paterner';

import { makeStyles } from '@material-ui/core/styles';
import TopContracts from './topcontracts';

const useStyles = makeStyles((theme)=>({
  root: { 
      display:'flex',
      flexDirection:'row',
      [theme.breakpoints.down('md')]: {
       flexWrap:'wrap'
      },

  },
  first :{
      width:'70%',
      margin:50,
      [theme.breakpoints.down('md')]: {
        margin:20,
        width:'100%',
      }
  },
  second:{
   width:'30%',
   margin:30,
   marginRight:50,
   [theme.breakpoints.down('md')]: {
    margin:15,
    marginRight:25,
    width:'100%',
    }
  },
}));


const BottomContent = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <div className={classes.first}>
            <Latestnew />
            <TopContracts />
            <TopContracts />
            </div>
            <div className={classes.second}>
            <Parter />
            <TopContracts />
            </div>
        

        </div>
     );
}
 
export default BottomContent;