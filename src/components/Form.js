import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DonateForm from "./DonateForm";
import RequestForm from "./RequestForm";
import { Fab, Icon } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 4, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  mainGrid: {
    width: "100vw",
    height: "60vh",
    spacing: 0,
    justify: "space-around",
  },
  titleText: {},
  sideText: { paddingTop: 20, marginTop: 20 },
  fab: {
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
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

  const [reqOpen, setReqOpen] = React.useState(false);
  const handleClickOpenReq = () => {
    setReqOpen(true);
  };

  const handleCloseReq = () => {
    setReqOpen(false);
  };

  return (
    <main className={classes.mainGrid}>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Link
          to="Stats"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className={classes.fab}
        >
          <Fab color="primary" variant="extended" size="large">
            <Icon color="secondary">
              <KeyboardArrowDownIcon />
            </Icon>
          </Fab>
        </Link>

        <DonateForm open={open} handleClose={handleClose} />
        <RequestForm open={reqOpen} handleClose={handleCloseReq} />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            alignItems="center"
            alignContent="space-between"
          >
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <Typography variant="h5" color="textSecondary">
                DONATE or REQUEST PLASMA
              </Typography>
              <Typography
                component="h1"
                variant="h1"
                align="left"
                color="secondary"
              >
                <div className={classes.titleText}>
                  <span>
                    <b>INDIA FIGHTS</b>{" "}
                  </span>
                  <br></br>
                  <span>
                    <b>BACK</b>
                  </span>
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className={classes.sideText}>
                <Typography
                  variant="h5"
                  align="left"
                  color="textSecondary"
                  paragraph
                >
                  <span>
                    You can register for Plasma Donation and <br />
                    help others win the fight.
                  </span>
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Donate your plasma
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClickOpenReq}
                      >
                        Request
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </main>
  );
}
