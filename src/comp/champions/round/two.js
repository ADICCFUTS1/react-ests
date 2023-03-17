import React from "react";

import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "./head";
import Get from "./Get";
import ButtonGroup from "./ButtonGroup";
import CardLoad from "../../componentes/CardLoad";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Two() {
  const classes = useStyles();
  const url =
    "https://opensheet.elk.sh/1nZfTRS2udvp15treTdFyURIlEISMX08338TGvomZi4U/ChampionsManual!A18:H26";
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Head />
        <ButtonGroup />
        {/*{todos && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {todos.map((todo, index) => (
              <img
                key={index}
                src={todo.Clasificados}
                alt={`Equipo ${index + 1}`}
              />
            ))}
          </div>
            )}*/}
        <Grid item xs={12}>
          <Typography variant="h6" component="h3">
            Cuartos de final
          </Typography>
        </Grid>
        {!todos ? (
          <Grid item xs={12}>
            <CardLoad />
          </Grid>
        ) : (
          todos.map((todo, index) => (
            <React.Fragment key={index}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Get {...todo} />
                </Grid>
              </Grid>
            </React.Fragment>
          ))
        )}
      </Container>
    </React.Fragment>
  );
  
}
