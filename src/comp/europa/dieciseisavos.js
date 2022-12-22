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
import EuropaButtons from "../componentes/europa-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://opensheet.elk.sh/1nZfTRS2udvp15treTdFyURIlEISMX08338TGvomZi4U/EuropaEliminatorias!A1:Z1000";
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
      <EuropaButtons />
      <div className={classes.root}>
        <Typography variant="h5" component="h5">
          Europa League: Dieciseisavos de final.
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      {todo.local === undefined || todo.local === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.local}</TableCell>
                      )}
                      {/*<TableCell>{todo.RLOCAL}</TableCell>
                      <TableCell>{todo.RVISITANTE}</TableCell>*/}
                      {todo.visitante === undefined || todo.visitante === "" ? (
                        <div></div>
                      ) : (
                        <TableCell>{todo.visitante}</TableCell>
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
