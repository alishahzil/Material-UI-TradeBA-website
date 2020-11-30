import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PrintIcon from '@material-ui/icons/Print';

const useStyles = makeStyles((theme)=>({
  root: {
    backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://cdn.pixabay.com/photo/2020/10/17/10/51/mountains-5661718_960_720.jpg')`,
    marginTop:'150px',
    marginLeft:'50px',
    marginRight:'50px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down('md')]: {
    marginLeft:'20px',
    marginRight:'20px',
    }, 
  },
  second:{
    display:'flex',
    color:'	#FFFFFF',
    margin:'20px',
    [theme.breakpoints.down('md')]: {
    
    }, 
  },
  firstbox:{
    paddingLeft:'20px',
  [theme.breakpoints.down('md')]: {
     order:2,
   }, 
  },
  secondbox:{
    paddingLeft:'20px',
   display:'flex',
   flexDirection:'column',
   [theme.breakpoints.down('md')]: {
    order:3,
  }, 
  },
  thirdbox:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    [theme.breakpoints.down('md')]: {
     order:1,
    }, 
  },
  buttonstyle:{
    margin: theme.spacing(2),
    backgroundColor:`rgba(241, 90, 35, 0.6)`,
    color:'white',
    '&:hover': {
      backgroundColor: '#283746',
  },
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(1),
    width:'75%',
  },
  },
}));
const TopMain = () => {
  const classes = useStyles();
    return (
      <Box className={classes.root}>
        <Box className={clsx( classes.second,classes.firstbox)}><Typography variant="h3" color="white">Trade season is upon us</Typography></Box>
        <Box  className={clsx (classes.second,classes.secondbox)}>
          <Typography variant="h5" color="white">The NBA off-season is rapidly approaching,</Typography>
          <Typography variant="h5" color="white">draft and trade scenarios are possible this summer.</Typography>
          </Box>
        <Box  className={clsx(classes.second,classes.thirdbox)}>
        <Button className={classes.buttonstyle} variant="text" >
          <WhatshotIcon style={{marginRight:'5px'}}/>
        FIRE UP THE TRADE MACHINE
      </Button>
      <Button  className={classes.buttonstyle} variant="text" >
      <WhatshotIcon style={{marginRight:'5px'}}/>
       LAUNCH MOCK DRAFT SIMULATOR
      </Button>
      <Button   className={classes.buttonstyle} variant="text">
      <PrintIcon style={{marginRight:'5px'}} />
        CREATE A DRAFT BIG BOARD
      </Button>
          </Box>
      </Box>
      
       
    );
}
 
export default TopMain;
