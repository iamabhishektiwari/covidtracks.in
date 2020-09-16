import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography, Link, Card } from "@material-ui/core";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
const tiers = [
  {
    title: "Total",
    price: "4200000",

    buttonText: "Graph",
    buttonVariant: "outlined",
  },
  {
    title: "Active",
    price: "127839",

    buttonText: "Graph",
    buttonVariant: "outlined",
  },
  {
    title: "Recovered",
    price: "0",

    buttonText: "Graph",
    buttonVariant: "outlined",
  },
  {
    title: "Deaths",
    price: "0",

    buttonText: "Graph",
    buttonVariant: "outlined",
  },
];
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 5, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  mainGrid: {
    spacing: 0,
    justify: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  titleText: {
    textDecorationLine: "underline",
    textDecorationColor: theme.palette.primary.main,
    paddingTop: 30,
    paddingBottom: "3%",
  },
  sideText: { paddingTop: "10", marginTop: 20 },
  bts: {
    color: theme.palette.primary.main,
  },
  card: {
    margin: 20,
  },
}));

export default function Counter() {
  const classes = useStyles();

  return (
    <main className={classes.mainGrid}>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            alignContent="space-between"
          >
            <Grid xs={12} sm={12} md={12} lg={12}>
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="secondary"
                gutterBottom
              >
                <div className={classes.titleText}>
                  <span>
                    <b>COUNTER</b>
                  </span>
                </div>
              </Typography>
            </Grid>
            <Grid
              container
              spacing={5}
              alignItems="flex-end"
              alignContent="space-between"
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              {tiers.map((tier) => (
                <Grid xs={6} sm={4} md={3} lg={3}>
                  <Card className={classes.card} elevation={0}>
                    <Typography
                      variant="h7"
                      align="left"
                      color="textSecondary"
                      paragraph
                    >
                      <span>{tier.title}</span>
                    </Typography>
                    <Typography
                      variant="h5"
                      align="left"
                      color="secondary"
                      paragraph
                    >
                      <span>{tier.price}</span>
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
