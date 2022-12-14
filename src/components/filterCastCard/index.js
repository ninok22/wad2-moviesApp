import React from "react"; 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(204, 204, 0)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterCastCard(props) {
  const classes = useStyles();

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };
  
return (
  <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography variant="h5" component="h1">
        <SearchIcon fontSize="large" />
          Filter the cast.
      </Typography>
      <TextField
        className={classes.formControl}
        id="filled-search"
        label="Type movie name here..."
        type="search"
        value={props.titleFilter}
        variant="filled"
        onChange={handleTextChange}
      />
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the cast.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}