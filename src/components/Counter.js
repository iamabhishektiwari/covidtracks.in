import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Chart from "./Chart";
const tiers = [
  {
    id: 0,
    title: "Covid-19",
    options: {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Covid-19 INDIA",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Direct" },
            { y: 49, label: "Organic Search" },
            { y: 9, label: "Paid Search" },
          ],
        },
      ],
    },
  },
  {
    id: 1,
    title: "Confirmed",
    options: {
      title: {
        text: "Daily Confirmed",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "Recovered",
    options: {
      title: {
        text: "Daily Recovered",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "Deaths",
    options: {
      title: {
        text: "Daily Deaths",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Apple", y: 10 },
            { label: "Orange", y: 15 },
            { label: "Banana", y: 25 },
            { label: "Mango", y: 30 },
            { label: "Grape", y: 28 },
          ],
        },
      ],
    },
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Counter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className={classes.mainGrid} id="Stats">
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            alignContent="space-between"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
            <Grid item xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                centered
              >
                {tiers.map((tier) => (
                  <Tab
                    key={tier.id}
                    label={tier.title}
                    {...a11yProps(tier.title)}
                  />
                ))}
              </Tabs>
              {tiers.map((tier) => (
                <TabPanel value={value} index={tier.id} key={tier.id}>
                  <Card elevation={0}>
                    <Chart options={tier.options} />
                  </Card>
                </TabPanel>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
