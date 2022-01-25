import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import pauseButtonBg from "../assest/img/pauseIcon.png.png";
import restartButtonBg from "../assest/img/restartIcon.png";
import playButtonBg from "../assest/img/playIcon.png";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const useStyles = makeStyles(() => ({
  gameContainer: {
    paddingTop: 10,
  },
  gameField: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 4,
    padding: 0,
    width: "500px !important",
    height: "500px !important",
    border: "5px solid  rgba(23, 178, 222, 0.24)",
    boxSizing: "content-box !important",
    backgroundImage:
      "linear-gradient(90.9deg, rgba(247, 58, 245, 0.24) 3.28%, rgba(23, 178, 222, 0.24) 97.89%) !important",
  },
  generationInfo: {
    textAlign: "center",
  },
  generationText: {
    color: "#E5EAF9",
    letterSpacing: "6px !important",
    fontFamily: "Poiret One, cursive !important",
    fontSize: "36px !important",
    padding: "12px 138px !important",
    backgroundColor: "#1b3a56",
    borderRadius: "19px",
    display: "inline-block !important",
    width: "290px !important",
    height: "45px !important",
  },
  gameButton: {
    marginRight: "60px !important",
    marginLeft: "60px !important",
    boxShadow: "6px 7px 22px 0px #00000059",
    width: "89px !important",
    height: "89px !important",
    borderRadius: 23,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
    backgroundColor:
      "linear-gradient(140.98deg, rgba(247, 58, 245, 0.15) 8.49%, rgba(23, 178, 222, 0.25) 100%) !important",
  },
  restartButton: {
    backgroundImage: `url(${restartButtonBg})`,
  },
  pauseButton: {
    backgroundImage: `url(${pauseButtonBg})`,
  },
  playButton: {
    backgroundImage: `url(${playButtonBg})`,
  },
  cell: {
    width: 50,
    height: 50,
    border: "1px solid black",
  },
  dialogContainer: {
    width: 600,
    height: 330,
    backgroundColor: "#131528",
    top: "25% !important",
    left: "30% !important",
  },
  dialogTitle: {
    fontFamily: "Bungee Hairline !important",
    fontSize: "64px !important",
    textTransform: "uppercase",
    color: "#E5EAF9",
    backgroundColor: "#131528",
    margin: 0,
    textAlign: "center",
    padding: " 70px 99px 20px !important",
  },
  dialogContent: {
    fontFamily: "Poiret One, cursive !important",
    fontSize: "36px !important",
    color: "#E5EAF9",
    backgroundColor: "#131528",
    textAlign: "center",
  },
  dialogActions: {
    backgroundColor: "#131528",
    display: "flex !important",
    justifyContent: "center !important",
  },
  dialogButton: {
    borderRadius: "30px !important",
    padding: "10px 15px !important",
    color: "#E5EAF9 !important",
    background:
      "linear-gradient(90.9deg, rgba(247, 58, 245, 0.24) 3.28%, rgba(23, 178, 222, 0.24) 97.89%)",
  },
}));

export function Game({
  handleCellClick,
  handleClose,
  open,
  startGame,
  handleRestartGame,
  genetation,
  cells,
}) {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8} className={classes.gameContainer}>
        <Grid container justifyContent="center">
          <Grid item className={classes.gameField}>
            {cells.map((row, rowIndex) =>
              row.map((cell, cellIndex) => (
                <Grid
                  item
                  key={cellIndex}
                  onClick={() => handleCellClick(rowIndex, cellIndex, true)}
                  className={classes.cell}
                  style={{
                    backgroundColor: cell.isAlive ? "#E5EAF9" : "transparent",
                  }}
                ></Grid>
              ))
            )}
          </Grid>
          <Grid item xs={12} className={classes.generationInfo}>
            <p className={classes.generationText}>Generation:{genetation}</p>
          </Grid>
          <Grid item>
            <Button
              className={`${classes.gameButton} ${classes.playButton}`}
              onClick={startGame}
            ></Button>
            <Button
              className={`${classes.gameButton} ${classes.restartButton}`}
              onClick={handleRestartGame}
            ></Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} className={classes.dialogContainer} fullScreen>
        <DialogTitle className={classes.dialogTitle}>Game over</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          Your score: {genetation}
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button className={classes.dialogButton} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
