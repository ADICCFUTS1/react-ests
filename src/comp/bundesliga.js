import React, { useState, useEffect } from "react";
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

export default (props) => {
  const url =
    "https://pirlotv3.herokuapp.com/full/app/estadisticas/json/alejson";
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
            <TableCell>GF : GC</TableCell>
            <TableCell>DIF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{props.data.rows.map((item, indx) => {*/}
          {!todos
            ? "Cargando..."
            : todos.map((todo, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{todo.numero}</TableCell>
                    <TableCell>{todo.equipo}</TableCell>
                    <TableCell>{todo.pts}</TableCell>
                    <TableCell>{todo.pj}</TableCell>
                    <TableCell>{todo.pg}</TableCell>
                    <TableCell>{todo.pe}</TableCell>
                    <TableCell>{todo.pp}</TableCell>
                    <TableCell>
                      {todo.gf} : {todo.gc}
                    </TableCell>
                    <TableCell>{todo.dif}</TableCell>
                  </TableRow>
                );
              })}
          {/*})}*/}
        </TableBody>
        <TableFooter />
      </Table>
    </TableContainer>
  );
};
