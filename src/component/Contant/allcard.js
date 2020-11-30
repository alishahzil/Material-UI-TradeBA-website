import React from 'react';
import Cardcomp from './card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
   display:'flex',
   flexDirection:'row',
   margin:'20px',
   justifyContent:'space-around',
   flexWrap:'wrap',
  },
});


const AllCard = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Cardcomp/>
            <Cardcomp />
            <Cardcomp />
            <Cardcomp />
        </div>
     );
}
 
export default AllCard;