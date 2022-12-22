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
import Typography from "@material-ui/core/Typography";
import ArgButtons from "../componentes/arg-buttons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  customTableContainer: {
    overflowX: "initial"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));
export default (props) => {
  const classes = useStyles();

  const url =
    "https://opensheet.elk.sh/14Qez5PEV-whvcwBvD81Q25f53086ZKs8uNunhE1giLA/LPF!A61:H89";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.root}>
      <ArgButtons />
      <div>
          <IconButton
            onClick={refreshPage}
            aria-label="delete"
            className={classes.margin}
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
          <Typography variant="h5" component="h5">
            Promedios:
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper
                className={classes.paper}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Descenso
              </Paper>
            </Grid>
          </Grid>
        <p> </p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Equipo</TableCell>
                <TableCell>20</TableCell>
                <TableCell>21</TableCell>
                <TableCell>22</TableCell>
                <TableCell>Pts</TableCell>
                <TableCell>PJ</TableCell>
                <TableCell>Prom</TableCell>
              </TableRow>
            </TableHead>
            {!todos
              ? "Cargando..."
              : todos.map((todo, index) => {
                  return (
                    <TableBody>
                      <TableRow key={index}>
                        {todo["#"] >= 27 ? (
                          <TableCell
                            style={{ backgroundColor: "red", color: "white" }}
                          >
                            {todo["#"]}
                          </TableCell>
                        ) : (
                          <TableCell>{todo["#"]}</TableCell>
                        )}
                        <TableCell>{todo.Equipo}</TableCell>
                        <TableCell>{todo["20"]}</TableCell>
                        <TableCell>{todo["21"]}</TableCell>
                        <TableCell>{todo["22"]}</TableCell>
                        <TableCell>{todo.Pts}</TableCell>
                        <TableCell>{todo.PJ}</TableCell>
                        <TableCell>{todo.Prom}</TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}

            <TableFooter />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
