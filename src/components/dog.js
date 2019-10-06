import React from "react";
import "../CSS/dog.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Dog = () => {
  const classes = useStyles();
  const [dogZero, setDogZero] = React.useState(false);
  const [dogOne, setDogOne] = React.useState(false);
  const [dogTwo, setDogTwo] = React.useState(false);
  const [dogThree, setDogThree] = React.useState(false);

  const handleExpandClickZero = () => {
    setDogZero(!dogZero);
  };
  const handleExpandClickOne = () => {
    setDogOne(!dogOne);
  };
  const handleExpandClickTwo = () => {
    setDogTwo(!dogTwo);
  };
  const handleExpandClickThree = () => {
    setDogThree(!dogThree);
  };
  return (
    <div className="container">
      <div className="item">
        <Card className={classes.card}>
          <CardHeader title="iny" subheader="Mix" />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              f
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.dogZero, {
                [classes.expandOpen]: dogZero
              })}
              onClick={handleExpandClickZero}
              aria-dogZero={dogZero}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={dogZero} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>f</Typography>
              <Typography paragraph>bvdx</Typography>
              <Typography paragraph>f</Typography>
              <Typography>f</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="item">
        <Card className={classes.card}>
          <CardHeader title="Shiny" subheader="Mix" />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              f
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.dogOne, {
                [classes.expandOpen]: dogOne
              })}
              onClick={handleExpandClickOne}
              aria-dogOne={dogOne}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={dogOne} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>f</Typography>
              <Typography paragraph>bvdx</Typography>
              <Typography paragraph>f</Typography>
              <Typography>f</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="item">
        <Card className={classes.card}>
          <CardHeader title="Shiny" subheader="Mix" />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              f
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.dogTwo, {
                [classes.expandOpen]: dogTwo
              })}
              onClick={handleExpandClickTwo}
              aria-dogTwo={dogTwo}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={dogTwo} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>f</Typography>
              <Typography paragraph>bvdx</Typography>
              <Typography paragraph>f</Typography>
              <Typography>f</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="item">
        <Card className={classes.card}>
          <CardHeader title="Gabriel" subheader="Chihuahua" />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              f
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.dogThree, {
                [classes.expandOpen]: dogThree
              })}
              onClick={handleExpandClickThree}
              aria-dogThree={dogThree}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={dogThree} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>f</Typography>
              <Typography paragraph>f</Typography>
              <Typography paragraph>f</Typography>
              <Typography>f</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default Dog;
