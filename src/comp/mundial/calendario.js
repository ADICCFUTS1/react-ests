import * as React from "react";
import { useState, useEffect } from "react";

import { NavLink, Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableContainer,
  Paper,
  Button,
  Typography
} from "@material-ui/core";
import MundialButtons from "../componentes/mundial-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://opensheet.elk.sh/1Ez7oLPwOBUFyaeuktz67SykD7fD2UQJOVNXeLL4zmCg/Calendario1!A1:Z1000";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const classes = useStyles();

  return (
    <div>
      <MundialButtons />
      <Typography variant="h5" component="h5">
        Calendario
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                console.log(todo.RLocal);
                return (
                  <TableBody>
                    <TableRow key={index}>
                      {todo.Local === undefined || todo.Local === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.Local}</TableCell>
                      )}
                      {/*{todo.RLocal === undefined || todo.RLocal === "" ? (
                        <div> </div>
                      ) : (
                        
                        <TableCell>{todo.RLocal}</TableCell>
                      )}
                      {todo.RVisitante === undefined ||
                      todo.RVisitante === "" ? (
                        <div> </div>
                      ) : (
                        <TableCell>{todo.RVisitante}</TableCell>
                      )}
                      <TableCell>{todo.RVISITANTE}</TableCell>
                       */}
                      {todo.Visitante === undefined || todo.Visitante === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.Visitante}</TableCell>
                      )}
                    </TableRow>
                  </TableBody>
                );
              })}
        </Table>
      </TableContainer>
    </div>
  );
};
