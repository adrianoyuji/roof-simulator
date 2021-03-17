import React from "react";
import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

const useStyles = createUseStyles({
  canvaScreen: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  canvaBg: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  overlay: ({ backgroundColor }) => ({
    height: "100%",
    width: "100%",
    opacity: "0.75",
    background: backgroundColor || "none",
    position: "absolute",
  }),
  canvaRoof: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  canvaFurniture: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

export default function Canva() {
  const { selectedEnvironment, backgroundColor } = useCanva();
  const classes = useStyles({ backgroundColor });
  return (
    <div className={classes.canvaScreen}>
      <img
        className={classes.canvaBg}
        alt="background"
        src={selectedEnvironment.background}
      />
      <div className={classes.overlay} />
      <img
        className={classes.canvaRoof}
        alt="roof"
        src={selectedEnvironment.roof}
      />
      <img
        className={classes.canvaFurniture}
        alt="furniture"
        src={selectedEnvironment.furniture}
      />
    </div>
  );
}
