import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const useStyles = makeStyles(() => ({
  container: {},
  header: {
    fontFamily: "Bungee Hairline, cursive !important",
    fontSize: "164px !important",
    color: "#fff",
    margin: 0,
    width: "100%",
    textAlign: "center",
  },
  rules: {
    border: "5px solid rgba(23, 178, 222, 0.24)",
    borderRadius: "10px",
    boxShadow: "3px 5px 18px 0px #00000040",
  },
  rulesHeader: {
    textAlign: "center",
    marginBottom: "5px !important",
    marginTop: "5px !important",
    width: "100%",
    color: "#E5EAF9",
    fontSize: "34px !important",
    textTransform: "uppercase",
    fontFamily: "Poiret One, cursive !important",
  },
  rulesLine: {
    height: 1,
    backgroundColor: "white",
    width: "100%",
  },
  rulesList: {
    width: "100%",
  },
  rulesListItem: {
    color: "#E5EAF9",
    fontFamily: "Poiret One, cursive !important",
    fontSize: 15,
    margin: 0,
    paddingTop: "16px !important",
    paddingLeft: "0px !important",
  },
  rulesIconContainer: {
    minWidth: "16px !important",
    width: "16px !important",
    marginRight: "10px",
  },
  rulesIcon: {
    color: "#E5EAF9",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px !important",
  },
  playButton: {
    color: "#E5EAF9",
    padding: "10px 202px !important",
    borderRadius: "22px !important",
    fontFamily: "Poiret One, cursive !important",
    fontSize: "36px !important",
    boxShadow: "6px 7px 22px 0px #00000059",
    background:
      "linear-gradient(90.9deg, rgba(247, 58, 245, 0.24) 3.28%, rgba(23, 178, 222, 0.24) 97.89%) !important",
  },
}));

export function StartPage({ setShowStartPage }) {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <Typography variant="h1" component="h1" className={classes.header}>
        Life
      </Typography>
      <Grid item xs={6}>
        <Grid container justifyContent="center" className={classes.rules}>
          <Typography
            component="h5"
            variant="h5"
            className={classes.rulesHeader}
          >
            Rules
          </Typography>
          <Grid item xs={10} className={classes.rulesLine}></Grid>
          <Grid item xs={10}>
            <p className={classes.rulesListItem}>
              The game "Life" takes place on a cellular field, which is
              traditionally called the "universe". Each cell can be alive or
              dead. At each step in time, the following transitions occur:
            </p>
            <List className={classes.rulesList}>
              <ListItem className={classes.rulesListItem}>
                <ListItemIcon className={classes.rulesIconContainer}>
                  <ArrowDropDownIcon className={classes.rulesIcon} />
                </ListItemIcon>
                Any live cell with fewer than two live neighbours die.
              </ListItem>
              <ListItem className={classes.rulesListItem}>
                {" "}
                <ListItemIcon className={classes.rulesIconContainer}>
                  <ArrowDropDownIcon className={classes.rulesIcon} />
                </ListItemIcon>{" "}
                Any live cell with two or three live neighbours lives on to the
                next generation.
              </ListItem>
              <ListItem className={classes.rulesListItem}>
                {" "}
                <ListItemIcon className={classes.rulesIconContainer}>
                  <ArrowDropDownIcon className={classes.rulesIcon} />
                </ListItemIcon>{" "}
                Any live cell with more than three live neighbours dies.
              </ListItem>
              <ListItem className={classes.rulesListItem}>
                {" "}
                <ListItemIcon className={classes.rulesIconContainer}>
                  <ArrowDropDownIcon className={classes.rulesIcon} />
                </ListItemIcon>{" "}
                Any dead cell with exactly three live neighbours becomes a live
                cell
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.playButton}
          onClick={() => setShowStartPage(false)}
        >
          Play
        </Button>
      </Grid>
    </Grid>
  );
}
