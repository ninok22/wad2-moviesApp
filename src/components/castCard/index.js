// import React, { useContext  } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function CastCard({ cast, action }) {
  const classes = useStyles();


return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      title={
        <Typography variant="h5" component="p">
          {cast.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
            <Typography variant="h6" component="p">
              {/* <StarRateIcon fontSize="small" /> */}
              {"Character: "} {cast.character}
            </Typography>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {/* assosiated w/click event handler w/render prop funtion */}
        {/* {action(cast)}  */}
        {/* <Link to={`/credits/${movie.id}`}> */}
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}