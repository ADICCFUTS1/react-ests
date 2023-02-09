import React, { useMemo, useCallback } from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "./head";
import Get from "./Get";
import EuropaButtonGroup from "./ButtonGroup";
import CardLoad from "../../componentes/CardLoad";

export default function One() {
  const useStyles = useMemo(() =>
    makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        maxWidth: "50%"
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
      },
      title: {
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
      }
    }))
  );

  const classes = useStyles();
  const url =
    "https://opensheet.elk.sh/1nZfTRS2udvp15treTdFyURIlEISMX08338TGvomZi4U/EuropaManual!A1:K17";
  const [todos, setTodos] = useState();

  const MemoizedGet = useMemo(() => React.memo(Get), []);
  const fetchApi = useCallback(async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  }, [url]);
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Head />
        <EuropaButtonGroup />

        <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
          {!todos ? (
            <Grid item xs={12}>
              <CardLoad />
            </Grid>
          ) : (
            todos.map((todo, index) => {
              return (
                <Grid item xs={12}>
                  <MemoizedGet {...todo} />
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
