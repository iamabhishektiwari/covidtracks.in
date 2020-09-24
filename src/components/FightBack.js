import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DonateForm from "./DonateForm";

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

  mainGrid: {
    width: "100vw",
    spacing: 0,
    justify: "space-around",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "7%",
  },
  titleText: {
    paddingTop: "7%",
    paddingBottom: "5%",
  },
  sideText: { paddingTop: "10", marginTop: 20 },
  bts: {
    color: theme.palette.primary.main,
  },
}));

export default function Counter() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className={classes.mainGrid}>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <DonateForm open={open} handleClose={handleClose} />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            alignContent="space-between"
          >
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="secondary"
              >
                <div className={classes.titleText}>
                  <span>
                    <b>FIGHT BACK</b>
                  </span>
                </div>
              </Typography>
              <Typography
                variant="h6"
                align="left"
                color="textSecondary"
                paragraph
              >
                <span>
                  Because your immune system fought off COVID-19, <br></br> you
                  now have antibodies in you that could help others fight it off
                  too.
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className={classes.sideText}>
                <Typography
                  variant="h6"
                  align="left"
                  color="textSecondary"
                  paragraph
                >
                  <span>
                    You can Save lifes, donate today. <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Register
                    </Button>
                  </span>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </main>
  );
}
