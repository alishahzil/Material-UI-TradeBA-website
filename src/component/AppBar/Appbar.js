import React,{useState} from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from  'clsx';
import Drawer from '@material-ui/core/Drawer';
import ReorderIcon from '@material-ui/icons/Reorder';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    displaynone:{
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    displaynoneup:{
      marginRight:'15px',
      [theme.breakpoints.only('lg','xl')]: {
        display: 'none',
      },
    },
    drawerContainer: {
      overflow: 'auto',
    },
  
    title: {
      flexGrow: 1,
    },
    customizeToolbar: {
        minHeight: 46,
        display:"flex",
        justifyContent:"space-between",
      },
    cutomizeAppbar: {
        backgroundColor:"#0b233f",
      },
    leftside: {
      display:"flex",
      alignItems:"center",
      color:"#adb9c9",
      },
    rightside: {
      display:"flex",
      alignItems:"center",
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        display:"flex",
        alignItems:"center",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
        [theme.breakpoints.down('md')]: {
         display:'none',
        }
      },
      searchIcon: {
        height: '100%',
        marginLeft:"4px",
        marginRight:"4px",
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      drawerPaper: {
        width: 240,
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '12ch',
          '&:focus': {
            width: '40ch',
          },
        },
      }
    
}));


const Appbar = (props) => {
  const [show, setshow] = useState(false);
  const [drawer, setdrawer] = useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
    
        <div className={classes.root}>
      <AppBar  className ={classes.cutomizeAppbar} position="static">
        <Toolbar id="back-to-top-anchor"  className={classes.customizeToolbar}>
        <div className={classes.leftside}>
          <ReorderIcon className={classes.displaynoneup} onClick={()=>{setdrawer(!drawer)}} />
        <img style={{height:"35px"}} src="https://tradenba.com/static/assets/images/tradenba-logo-orange.png?web-developer-reload=1606282724371"/>
          <Typography  style={{color:"white",marginRight:"15px"}} variant="h6" className={classes.title}>
            TradeNBA
          </Typography>
          <Typography style={{marginRight:"15px"}} variant="button" display="block" className={clsx(classes.title,classes.displaynone)}>
            TEAMS
          </Typography>
          <Typography style={{marginRight:"15px"}} variant="button" display="block"  className={clsx(classes.title,classes.displaynone)}>
            TRADE MACHINE
          </Typography>
          <Button style={{marginRight:"15px"}} color="inherit"  aria-controls="fade-menu" aria-haspopup="true"  className={classes.displaynone} onClick={handleClick}>
            
            TRADES
            <ArrowDownwardIcon fontSize="inherit" />
          </Button>
          <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          <Button style={{marginRight:"15px",}} color="inherit"  className={classes.displaynone}>
            DRAFT
            <ArrowDownwardIcon fontSize="inherit" />
          </Button>
        </div>
          <div  className={classes.rightside}>
          <div style={{marginRight:"15px",}} className={classes.search}>
          
            <div className={classes.searchIcon}>
              <SearchIcon />
          
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
              onClick={()=>{setshow(!show)}}
            />
           <div className={classes.searchIcon}>
              {show && <ClearIcon />}
            </div>
          </div>
          <SearchIcon className={classes.displaynoneup} />
          <Button style={{border:"solid 1px",zIndex:"0"}} color="inherit">Join</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">
          <MoreVertIcon />
          </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
       anchor='left' open={drawer} onClose={()=>setdrawer(!drawer)}>
      <div className={classes.drawerContainer}>
      <List>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>
      <ListItem button><ListItemIcon> <MailIcon /></ListItemIcon><ListItemText primary={"Teams"} />   </ListItem>     
          </List>
     </div>
     </Drawer>
    </div>
    );
}
 
export default Appbar;