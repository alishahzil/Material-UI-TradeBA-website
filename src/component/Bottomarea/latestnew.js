import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
       
  },
  line:{
    borderBottomStyle:'solid',
    borderBottomWidth:'thin',
    marginTop:'5px',
  },
  margins:{
    marginTop:'10px',
  },
  margin2:{
      marginTop:'25px',
  },
  movebutton:{
    border:'1px solid',
    display:'flex',
    marginLeft:'auto',
  }
});
const Latestnew = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Typography variant="h6" color="dark">Latest news about the site</Typography>
            <div className={classes.line}></div>
            <Typography variant="h5" color="initial">New Draft Tools</Typography>
            <div className={classes.margins}><Typography  variant=" body1" color="initial">October 24, 2020 by Zach @tradenba1</Typography> </div>
            <Typography variant="body1" color="initial">TradeNBA has now expanded into providing resources for the NBA draft! With similar features as our trade machine, you can share, rate and comment on your draft creations...</Typography>
            <Button className={classes.movebutton}  variant="text" color="transparent">
              READ MORE
            </Button>
            <div className={classes.margin2}>
            <Typography variant="h5" color="initial">New Draft Tools</Typography>
            <div className={classes.margins}><Typography  variant=" body1" color="initial">October 24, 2020 by Zach @tradenba1</Typography> </div>
            <Typography variant="body1" color="initial">TradeNBA has now expanded into providing resources for the NBA draft! With similar features as our trade machine, you can share, rate and comment on your draft creations...</Typography>
            <Button className={classes.movebutton}  variant="text" color="transparent">
              READ MORE
            </Button>
            </div>
            <div className={classes.margin2}>
            <Typography variant="h5" color="initial">New Draft Tools</Typography>
            <div className={classes.margins}><Typography  variant=" body1" color="initial">October 24, 2020 by Zach @tradenba1</Typography> </div>
            <Typography variant="body1" color="initial">TradeNBA has now expanded into providing resources for the NBA draft! With similar features as our trade machine, you can share, rate and comment on your draft creations...</Typography>
            <Button className={classes.movebutton} variant="text" color="transparent">
              READ MORE
            </Button>
            </div>


        </div>
     );
}
 
export default Latestnew;