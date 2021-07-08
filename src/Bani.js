import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import bani from './asset/bani.jpeg';



const useStyles = makeStyles((theme) =>({
  root: {
    marginTop : 40 , 
    maxWidth: 300,
    marginInlineStart:70 ,
    shadowColor: "gray",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 30,
    
  },

  sizeAvatar: {
    height: theme.spacing(12),
    width: theme.spacing(12),
  },
  media: {

    height: 20,
  },
}));

 function Bani() {
  const classes = useStyles();

  return (
    <div className= "rows">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/people.png"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Avatar alt="Remy Sharp" src={ bani }  className={classes.sizeAvatar} />
          <Typography gutterBottom variant="h5" component="h2" >
            <b> BANI SIMRAN <span color = "textSecondary"> KAUR </span> </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          I am a first year student at IIIT BBSR "( ETC )" . I am an <b> CP </b> enthusiast . 
          I have explored domains like <b>IOT  </b> , I  love challenging puzzles and solve cp questions
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >

     
      
      </CardActions>
    </Card>
    </div>
  );
}

export default Bani ;