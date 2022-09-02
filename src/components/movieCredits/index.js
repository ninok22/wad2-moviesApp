import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credit, setCredit] = useState([]);

  // useEffect(() => {
  //   getMovieCredits(movie.id).then((credit) => {
  //     setCredit(credit);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="credits table">
        
         <TableHead>
           <TableRow>
            <TableCell >CREDITS</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
         </TableHead>
{  
        <TableBody>
          {/* {credits.map((c) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                {c.author}
              </TableCell>
              <TableCell >{excerpt(c.content)}</TableCell>
              <TableCell >
                <Link
                  to={{
                    pathname: `/credit/${c.id}`,
                    state: {
                      credits: c,
                      movie: movie,
                    },
                  }}
                >
                  Movie Credits
                </Link>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody> }

       </Table>
     </TableContainer>
  );
}