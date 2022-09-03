// import React, { useEffect, useState }  from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { Link } from "react-router-dom";
// import { getMovieCredits } from "../../api/tmdb-api";
// import { excerpt } from "../../util";

// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";


// const useStyles = makeStyles({
//   table: {
//     minWidth: 550,
//   },
// });

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     marginTop: theme.spacing(2),
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //   },
// //   form: {
// //     width: "100%",
// //     "& > * ": {
// //       marginTop: theme.spacing(2),
// //     },
// //   },
// //   textField: {
// //     width: "40ch",
// //   },
// // }));

// export default function MovieCredits({ movie }) {
//   const classes = useStyles();
//   const [credits, setCredit] = useState([]);

//   // useEffect(() => {
//   //   getMovieCredits(movie.id).then((credit) => {
//   //     setCredit(credits);
//   //   });
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);

//   return (
//     <Box component="div" className={classes.root}>
//       <Typography  variant="h6">
//         Credits
//       </Typography>
    
//     </Box>
//   );
// };




// //     <TableContainer component={Paper}>
// //        <Table className={classes.table} aria-label="credits table">
        
// //          <TableHead>
// //            <TableRow>
// //             <TableCell >Cast Members</TableCell>
// //             <TableCell align="right">More</TableCell>
// //           </TableRow>
// //          </TableHead>
// // {  
// //         <TableBody>
// //           {credit.map((c) => ( 

// //             <TableRow key={c.id}>

// //               <TableCell component="th" scope="row">
// //                 {c.person}
// //               </TableCell>

// //               {/* <TableCell >{excerpt(c.content)}</TableCell> */}
// //               {/* <TableCell >
// //                 <Link
// //                   to={{
// //                     pathname: `/credit/${c.id}`,
// //                     state: {
// //                       credits: c,
// //                       movie: movie,
// //                     },
// //                   }}
// //                 >
// //                   Movie Credits
// //                 </Link>
// //               </TableCell> */}
// //             </TableRow>
// //           ))} 
// //         </TableBody> }

// //        </Table>
// //      </TableContainer>
// //   );
// // };