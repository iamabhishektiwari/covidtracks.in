import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Top from "./Top";
import Counter from "./Counter";
import Form from "./Form";
import Footer from "./Footer";
import FightBack from "./FightBack";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { Icon, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(1, 5, 2),
  },
  stepsHead: {
    paddingTop: 20,
  },
  detailHead: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    margin: 30,
    padding: 40,
  },
  media: {
    height: 0,
    paddingTop: "46.25%", // 16:9,
    marginTop: "30",
  },
  head2: {
    marginBottom: 20,
    marginTop: 10,
  },
  detail2: {
    marginBottom: 20,
    paddingBottom: 20,
  },
}));

const steps = [
  {
    id: "1",
    title: "ELIGIBILITY",
    description:
      "You must have had COVID-19 documented by a laboratory test, an antibody test, or clinical diagnosis and meet other donor criteria. You must also be symptom free for at least 14 days prior to visiting a donor center.",
  },
  {
    id: "2",
    title: "REGISTRATION",
    description:
      "You will be asked to show proof of identification and share your contact information when you arrive at the donor center. All information will be kept strictly confidential.",
  },
  {
    id: "3",
    title: "Matching",
    description:
      "Our algorithm will find a requirement nearest to you, and will contact you.",
  },
];

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <div className={classes.content}>
          <Grid
            container
            spacing={15}
            alignItems="flex-start"
            alignContent="space-between"
          >
            <Grid xs={12} sm={12} md={6}>
              <Typography variant="h5" className={classes.detailHead}>
                HOW IT WORKS
              </Typography>
              <Typography variant="h7" paragraph color="textSecondary">
                Donating blood plasma is a safe process that has been used for
                more than one hundred years to help save lives. Thousands of
                people safely and painlessly donate every day. Blood plasma
                donation is performed in a highly regulated environment by
                professionally trained staff using sterile, one-time-use,
                disposable materials. Facilities follow strict guidelines when
                collecting plasma to ensure the donor’s safety and comfort.
              </Typography>
              <Typography
                variant="h7"
                paragraph
                color="textPrimary"
                className={classes.stepsHead}
              >
                Here are some of the key steps to donate:
              </Typography>

              {steps.map((step) => (
                <Grid
                  container
                  spacing={15}
                  alignItems="flex-start"
                  alignContent="space-between"
                >
                  <Grid xs={3}>
                    <Icon fontSize="large">
                      {step.id === "1" && (
                        <AssignmentTurnedInIcon style={{ fontSize: 80 }} />
                      )}
                      {step.id === "2" && (
                        <VerifiedUserIcon style={{ fontSize: 80 }} />
                      )}
                      {step.id === "3" && (
                        <LibraryAddIcon style={{ fontSize: 80 }} />
                      )}
                    </Icon>
                  </Grid>
                  <Grid xs={9}>
                    <h2>
                      {step.id}. {step.title}
                    </h2>
                    <Typography variant="h7" paragraph color="textSecondary">
                      {step.description}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid xs={12} sm={12} md={6}>
              <Card elevation={2} className={classes.card}>
                <Typography variant="h5" className={classes.head2}>
                  WHAT IS BLOOD PLASMA?
                </Typography>
                <Typography
                  variant="h7"
                  color="textSecondary"
                  className={classes.detail2}
                >
                  Plasma – the liquid portion of your blood – can be easily
                  replaced by your body. It consists mainly of water, proteins
                  and antibodies that help your body to function. If you have
                  survived COVID-19 then your plasma includes antibodies that
                  could help others fight the virus.
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={require("./../images/plasma.png")}
                  title="Test"
                />
                <Typography variant="h5" className={classes.head2}>
                  HOW IS BLOOD PLASMA USED??
                </Typography>
                <Typography
                  variant="h7"
                  color="textSecondary"
                  className={classes.detail2}
                >
                  Plasma from those who have recovered could be a key part of
                  the fight against COVID-19. Once the COVID-19 plasma is
                  donated, it can take one of two paths: be directly transfused
                  into patients or be used to make a potential medicine.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
