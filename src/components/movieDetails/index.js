import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import MovieCredits from "../movieCredits";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab1: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(5),
  },
  fab2: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(25),
  },
}));

const MovieDetails = ({ movie, credit }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen1, setDrawerOpen1] = useState(false);
  const [drawerOpen2, setDrawerOpen2] = useState(false);
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Fab key="fab1"
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen1(true)}
        className={classes.fab1}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Fab key="fab2"
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen2(true)}
        // onClick={
        //   <Link
        //     to={{
        //       pathname: `/credits/${c.id}`,
        //       state: {
        //         credit: c,
        //         movie: movie,
        //       },
        //     }}>
        //       Cast List
        //  </Link>
        // }
        className={classes.fab2}
      >
        <NavigationIcon />
        Cast
      </Fab>

      <Drawer key="drawer1" anchor="top" open={drawerOpen1} onClose={() => setDrawerOpen1(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      <Drawer key="drawer2" anchor="top" open={drawerOpen2} onClose={() => setDrawerOpen2(false)}>
        <MovieCredits credit={credit} />
      </Drawer>
      </>
  );


};
export default  MovieDetails ;