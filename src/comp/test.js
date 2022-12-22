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
  Paper,
  Button,
  Divider,
  IconButton
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  customTableContainer: {
    overflowX: "initial"
  }
}));
export default (props) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const Hoja = urlParams.get("Hoja");
  const url =
    "https://opensheet.elk.sh/1JnXdzWbSuqSApMi6P42lEznPo7led8vIKECdMFR_3IY/Partido1!A1:Z2074";
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
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <div className={classes.root}>
        <IconButton
          onClick={refreshPage}
          aria-label="delete"
          className={classes.margin}
        >
          <RefreshIcon fontSize="small" />
        </IconButton>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>L</TableCell>
              <TableCell>-</TableCell>
              <TableCell>V</TableCell>
            </TableRow>
          </TableHead>
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      <TableCell>{todo.Local}</TableCell>
                      <TableCell>{todo.Medio}</TableCell>
                      <TableCell>{todo.Visitante}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}

          <TableFooter />
        </Table>
      </TableContainer>
    </div>
  );
};
