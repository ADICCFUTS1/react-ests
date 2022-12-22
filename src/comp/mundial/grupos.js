import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableContainer,
  Paper
} from "@material-ui/core";
import MundialButtons from "../componentes/mundial-buttons";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      maxWidth: 500
    }
  },
  customTableContainer: {
    overflowX: "initial"
  },
  Load: {
    width: "100%"
  }
}));
export default (props) => {
  const classes = useStyles();

  const url =
    "https://opensheet.elk.sh/1EUmIOwosuGTI7L2DD6S02RjOG7vbxU3FjVVD1u-iYiw/Mundial!A1:Z2074";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <MundialButtons />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Equipo</TableCell>
              <TableCell>Pts</TableCell>
              <TableCell>PJ</TableCell>
              <TableCell>PG</TableCell>
              <TableCell>PE</TableCell>
              <TableCell>PP</TableCell>
              <TableCell>GF</TableCell>
              <TableCell>GC</TableCell>
              <TableCell>DIF</TableCell>
            </TableRow>
          </TableHead>
          {!todos ? (
            <div className={classes.Load}>
              <Skeleton />
              <Skeleton animation={false} />
              <Skeleton animation="wave" />
            </div>
          ) : (
            todos.map((todo, index) => {
              return (
                <TableBody>
                  <TableRow key={index}>
                    {todo["#"] <= 2 ? (
                      <TableCell
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        {todo["#"]}
                      </TableCell>
                    ) : (
                      <TableCell>{todo["#"]}</TableCell>
                    )}
                    <TableCell>{todo.Equipo}</TableCell>
                    <TableCell>
                      <Typography>{todo.Pts}</Typography>
                    </TableCell>
                    <TableCell>{todo.PJ}</TableCell>
                    <TableCell>{todo.PG}</TableCell>
                    <TableCell>{todo.PE}</TableCell>
                    <TableCell>{todo.PP}</TableCell>
                    <TableCell>{todo.GF}</TableCell>
                    <TableCell>{todo.GC}</TableCell>
                    <TableCell>{todo.DIF}</TableCell>
                  </TableRow>
                </TableBody>
              );
            })
          )}

          <TableFooter />
        </Table>
      </TableContainer>
    </div>
  );
};
