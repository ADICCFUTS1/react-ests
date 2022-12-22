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
import EuropaButtonGroup from "./ButtonGroup";
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

export default function Five() {
  const classes = useStyles();
  const url =
    "https://opensheet.elk.sh/1EUmIOwosuGTI7L2DD6S02RjOG7vbxU3FjVVD1u-iYiw/Manual!A20:K21";
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
        <EuropaButtonGroup />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h3">
              Final
            </Typography>
          </Grid>
          {!todos ? (
            <Grid item xs={12}>
              <CardLoad />
            </Grid>
          ) : (
            todos.map((todo, index) => {
              return (
                <Grid item xs={12}>
                  <Get {...todo} />
                </Grid>
              );
            })
          )}
          {/*<Grid item xs={6}>
          <Octavos />
        </Grid>*/}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
