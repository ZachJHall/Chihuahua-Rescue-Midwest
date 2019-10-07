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
import oreo from "../images/oreo1.jpg";
import oliver from "../images/oliver1.jpg";
import luna from "../images/luna1.jpg";
import jeannie from "../images/jeannie1.jpeg";
import jed from "../images/jed1.jpg";
import pixie from "../images/pixie1.jpg";
import barnaby from "../images/barnaby1.jpg";

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

const Dog = () => {
  const classes = useStyles();
  const [dogZero, setDogZero] = React.useState(false);
  const [dogOne, setDogOne] = React.useState(false);
  const [dogTwo, setDogTwo] = React.useState(false);
  const [dogThree, setDogThree] = React.useState(false);
  const [dogFour, setDogFour] = React.useState(false);
  const [dogFive, setDogFive] = React.useState(false);
  const [dogSix, setDogSix] = React.useState(false);

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
  const handleExpandClickFour = () => {
    setDogFour(!dogFour);
  };
  const handleExpandClickFive = () => {
    setDogFive(!dogFive);
  };
  const handleExpandClickSix = () => {
    setDogSix(!dogSix);
  };
  return (
    <div>
      <div className="container">
        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Oreo" subheader="Chihuahua" />
            <CardMedia className={classes.media} image={oreo} title="Oreo" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Female - Senior - 5 lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
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
                <Typography paragraph>
                  <strong>Description:</strong>{" "}
                </Typography>
                <Typography paragraph>
                  Oreo is an older girl, but oh so sweet and loving. She
                  recently had a dental so she is missing some teeth but that
                  won't stop her. Oreo was found by a good Samaritan just
                  wandering down Hwy 55. Once we were able to catch her give her
                  a bath and get her mouth fixed she feels better and came out
                  of her shell. She now enjoys taking a walk. However, her
                  favorite thing to do is sleep with her person, If you want
                  someone to sit on your lap all day and soak up your attention
                  Oreo will be the perfect dog for you. She only weighs 5 lbs.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Oliver" subheader="Chihuahua" />
            <CardMedia
              className={classes.media}
              image={oliver}
              title="Oliver"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Male - 8 years - [weight] lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
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
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>
                  Oliver is slow to warm up. Once he is comfortable with you he
                  will become a lap dog. He seems to be housebroken.{" "}
                  <strong>NO CHILDREN PLEASE.</strong>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Barnaby" subheader="Chihuahua" />
            <CardMedia
              className={classes.media}
              image={barnaby}
              title="Barnaby"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Male - Young - 10 lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
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
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>
                  Barnaby is a young male who is looking for a safe forever
                  home. He is about 10 pounds and is about 1 yr old. This boy is
                  very sweet and really wants to trust someone. He tends to be
                  afraid of men so a single woman may be best to be his mom.
                  With time, he will trust and love you enormously. We are not
                  sure of his past as he was brought in by animal control. But,
                  his foster mom says he is opening up more and more every day.
                  Barnaby loves to play so if you have another dog who could be
                  a sibling for him, he would love that. He does not
                  discriminate and loves all dogs, big or small. We are
                  currently making strides towards leash walking and potty
                  training. Since he is young, we know he will master these
                  things very quickly. We can already see he is very smart.
                </Typography>
                <Typography paragraph>
                  Barnaby is a young male who is looking for a safe forever
                  home. He is about 10 pounds and is about 1 yr old. This boy is
                  very sweet and really wants to trust someone. He tends to be
                  afraid of men so a single woman may be best to be his mom.
                  With time, he will trust and love you enormously. We are not
                  sure of his past as he was brought in by animal control. But,
                  his foster mom says he is opening up more and more every day.
                  Barnaby loves to play so if you have another dog who could be
                  a sibling for him, he would love that. He does not
                  discriminate and loves all dogs, big or small. We are
                  currently making strides towards leash walking and potty
                  training. Since he is young, we know he will master these
                  things very quickly. We can already see he is very smart.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>

      <div className="container">
        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Luna" subheader="Chihuahua" />
            <CardMedia className={classes.media} image={luna} title="Luna" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Female - Adult - 11 lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
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
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>
                  Luna is a gorgeous girl who loves to play and snuggle. She is
                  very protective of her loved ones so strangers can be scary
                  for her. It takes her a while to warm up to new people but
                  when she does, she gives them all her love. She is a dominant
                  female and would do best as the only pet. This feisty cutie
                  needs a lot of love and attention.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Pixie" subheader="Chihuahua" />
            <CardMedia className={classes.media} image={pixie} title="Pixie" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Female - Adult - 11 lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
              <IconButton
                className={clsx(classes.dogFive, {
                  [classes.expandOpen]: dogFive
                })}
                onClick={handleExpandClickFive}
                aria-dogFive={dogFive}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={dogFive} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>Just came into rescue.</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Jeannie" subheader="Chihuahua" />
            <CardMedia
              className={classes.media}
              image={jeannie}
              title="Jeannie"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Female - Senior - 12 lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
              <IconButton
                className={clsx(classes.dogFour, {
                  [classes.expandOpen]: dogFour
                })}
                onClick={handleExpandClickFour}
                aria-dogFour={dogFour}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={dogFour} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>
                  Jeannie is a 13 year old lady who needs a special home. She
                  likes to be your snuggle buddy at all times but will also
                  snuggle any house guests too. She loves other dogs and
                  animals. She says "I love you" when she cries and loves to
                  climb on everything, including cat trees, window sills, and
                  the chair you were just about to sit on. She might be part
                  cat!
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <Card className={classes.card}>
            <CardHeader title="Jed" subheader="Chihuahua" />
            <CardMedia className={classes.media} image={jed} title="Jed" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Male - Adult - [weight] lbs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Click to learn more</strong>
              </Typography>
              <IconButton
                className={clsx(classes.dogSix, {
                  [classes.expandOpen]: dogSix
                })}
                onClick={handleExpandClickSix}
                aria-dogSix={dogSix}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={dogSix} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>Description: </strong>
                </Typography>
                <Typography paragraph>
                  Jed is a 5 year old boy who recently lost his family due to
                  illness. If you are looking for the perfect family small dog,
                  Jed is the answer to your prayers. He loves everyone and loves
                  to snuggle. Really, he doesn’t have a bad habit! Can you adopt
                  Jed and make him part of your family today?
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dog;
