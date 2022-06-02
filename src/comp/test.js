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
  const url =
    "https://opensheet.elk.sh/1KlbYfjyegeeXt3Xxul8_BagK3SPJZkHpjK6mBO0E0_Y/Grupo1!A1:Z2074";
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
        <Button variant="outlined">Grupos</Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Equipo</TableCell>
              <TableCell>PTS</TableCell>
              <TableCell>PJ</TableCell>
              <TableCell>PG</TableCell>
              <TableCell>PE</TableCell>
              <TableCell>PP</TableCell>
              <TableCell>GF</TableCell>
              <TableCell>GC</TableCell>
              <TableCell>DIF</TableCell>
            </TableRow>
          </TableHead>
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableBody>
                    <TableRow key={index}>
                      {todo.numero <= 2 ? (
                        <TableCell
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          {todo.numero}
                        </TableCell>
                      ) : (
                        <TableCell>{todo.numero}</TableCell>
                      )}
                      <TableCell>{todo.Equipo}</TableCell>
                      <TableCell>{todo.Pts}</TableCell>
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
              })}

          <TableFooter />
        </Table>
      </TableContainer>
    </div>
  );
};
