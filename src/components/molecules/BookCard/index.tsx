import React from "react";
import PropTypes from "prop-types";
import logo3 from '../../../images/timer.jpg';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EventListItemComponent = (props: any) => {
  const { cardData } = props;

  return (
    <Grid>
      <Card variant='outlined' style={{width: 300, height: 425, marginLeft: 240, marginRight: -150, marginTop: 30}}>
        <CardActionArea>    
        <CardMedia style={{paddingTop: '50%', height: 120}} image={cardData.image} title='card media title' />
        <CardContent>
          <Typography>
            <b>{cardData.title}</b>
          </Typography>
          <p style={{marginTop: 10}}>{cardData.author}</p>
          <img src={logo3} style={{width: 20, height: 20}} className="App-logo" alt="logo"/>
          <p style={{marginLeft: 25, marginTop: -22}}>{cardData.readTime}</p>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={cardData.onClick} style={{marginLeft: 90, marginTop: -23, color: "#0082be"}} size="small"><b>{cardData.finish ? "Read again" : "Finished"}</b></Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

EventListItemComponent.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    finish: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

EventListItemComponent.defaultProps = {};

export default EventListItemComponent;
