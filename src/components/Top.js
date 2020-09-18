import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DonateForm from "./DonateForm";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.main,
    fontSize: 18,
  },
}));

function Top() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main id="Top">
      <DonateForm open={open} handleClose={handleClose} />
      <AppBar
        position="static"
        color="secondary"
        elevation={3}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="secondary"
            noWrap
            className={classes.toolbarTitle}
          >
            .
          </Typography>
          <nav>
            <Link to="/" className={classes.link}>
              Home
            </Link>

            <Link to="/how-it-works" className={classes.link}>
              How it works?
            </Link>
            {/* <Link
            variant="button"
            color="primary"
            href="#"
            className={classes.link}
          >
            About
          </Link> */}
            <Link
              to="/"
              variant="button"
              color="primary"
              className={classes.link}
              onClick={handleClickOpen}
            >
              Donate
            </Link>
            {/* <Link
            variant="button"
            color="primary"
            href="#"
            className={classes.link}
          >
            Support us
          </Link> */}
          </nav>
        </Toolbar>
      </AppBar>
    </main>
  );
}

export default withStyles(useStyles, { withTheme: true })(Top);
