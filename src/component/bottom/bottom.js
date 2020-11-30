import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
     margin:'20px',
     display:'flex',
     flexDirection:'row',
    
     [theme.breakpoints.down('md')]: {
         flexWrap:'wrap',
         justifyContent:'space-around',
      },
  },
  first:{
    width:'40%',
    [theme.breakpoints.down('sm')]: {
        width:'80%',
     },
  },
  second:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
   
     
  }
}));


const Bottom = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div> 
               <img style={{height:'80px'}} src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
            </div>
            <div>
                <Typography variant="subtitle2h1" color="initial">This site has no official affiliation with the National Basketball Association or any other 3rd-party entities listed on this site. Google Play and the Google Play logo are trademarks of Google LLC.</Typography>
                <div  className={classes.first}>
                    <div className={classes.second}>
                    <Typography variant="subtitle2" color="initial">© 2020 TradeNBA</Typography>
                    <Typography variant="subtitle2" color="initial">Terms & Conditions</Typography>
                    <Typography variant="subtitle2" color="initial"> Privacy Policy</Typography> 
                    </div>  

                </div>
            </div>
        </div>
      );
}
 
export default Bottom;