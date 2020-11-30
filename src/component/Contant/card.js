import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 275,
      margin:'20px',
      [theme.breakpoints.down('md')]: {
      maxWidth: 400,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 720,
        margin:'10px',
        },
    },
    media: {
      height: 140,
    },
  }));
const Cardcomp = () => {
    const classes = useStyles();
    return (  
        <Card className={classes.root}>
        <CardActionArea>
        <Box display={{xs:'none',sm:'none',md:'block'}}>
          <CardMedia 
            className={classes.media}
            image="https://res.cloudinary.com/djcqmdgda/image/upload/f_auto,o_40/h_60,l_teams:logos:primary:23/fl_layer_apply,g_north_west,o_80,x_16/h_60,l_teams:logos:primary:30/fl_layer_apply,g_north_west,o_80,x_120/h_60,l_teams:logos:primary:14/fl_layer_apply,g_north_east,o_80,x_120/h_60,l_teams:logos:primary:20/fl_layer_apply,g_north_east,o_80,x_16/e_trim,l_players:silos:101150/c_thumb,co_rgb:ED174C90,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_west/e_trim,l_players:silos:201566/c_thumb,co_rgb:E3183790,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_west,x_102/e_trim,l_players:silos:1628970/c_thumb,co_rgb:F5842690,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_east/e_trim,l_players:silos:203507/c_thumb,co_rgb:FDB92790,e_outline:3,g_face,h_140,w_120/c_crop,g_north,h_140,w_94/fl_layer_apply,g_south_east,x_102/co_rgb:006BB6,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_94/co_rgb:002B5C,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_196/co_rgb:552583,e_colorize,g_west,h_200,l_machine:black_line,o_50,w_8,x_298/co_rgb:006BB6,e_colorize,g_west,h_200,u_machine:background_white,w_94,x_0/co_rgb:002B5C,e_colorize,g_west,h_200,u_machine:background_white,w_94,x_102/co_rgb:552583,e_colorize,g_east,h_200,u_machine:background_white,w_94,x_102/co_rgb:006BB6,e_colorize,g_east,h_200,u_machine:background_white,w_94,x_0/v1/machine/background_pixels"
            title="Contemplative Reptile"
          />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Popular Trades
            </Typography>
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This week
                    </Typography>
                    <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
            </div>
            <Typography variant="body2" >View the most popular trade scenarios created by users in the past week.</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Cardcomp;
