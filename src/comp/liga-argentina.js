import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableContainer,
  Paper,
  Divider
} from "@material-ui/core";

export default (props) => {
  const url =
    "https://opensheet.elk.sh/1EUmIOwosuGTI7L2DD6S02RjOG7vbxU3FjVVD1u-iYiw/Liga-Argentina!A1:Z2074";
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
                    {todo["#"] <= 1 ? (
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
  );
};
