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
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import oreo from "../images/oreo1.jpg";
import oliver from "../images/oliver1.jpg";
import luna from "../images/luna1.jpg";
import jeannie from "../images/jeannie1.jpeg";
import jed from "../images/jed1.jpg";
import pixie from "../images/pixie1.jpg";
import barnaby from "../images/barnaby1.jpg";
import data from "../data/dog.json";

const useStyles = makeStyles(theme => ({
  card: {
    width: 325
  },
  media: {
    height: 0,
    paddingTop: "80%" // 16:9
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

const DogCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { dogOne } = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={props.name} subheader="Chihuahua" />
      <CardMedia
        className={classes.media}
        image={props.picture}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.gender} - {props.age} years - {props.weight} lbs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Click to learn more</strong>
        </Typography>
        <IconButton
          className={clsx(classes.dogOne, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Description: </strong>
          </Typography>
          <Typography paragraph>{props.descr}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Super = () => {
  return (
    <div>
      <h1>Dogs Available</h1>
      <div className="container1">
        {data.map(p => (
          <DogCard
            name={p.name}
            key={p.id}
            age={p.age}
            descr={p.descr}
            gender={p.gender}
            weight={p.weight}
            picture={p.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Super;
