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
  Divider
} from "@material-ui/core";
import LibertadoresButtons from "../componentes/libertadores-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
export default (props) => {
  const url =
    "https://opensheet.elk.sh/1-cIOBiWukvyHioF-2dF7OUqIa7fs3JxaYva1cSiRn50/Libertadores!A1:Z2074";
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
      <LibertadoresButtons />
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
      <Divider />
    </div>
  );
};
