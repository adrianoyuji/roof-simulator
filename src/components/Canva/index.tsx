import React from "react";
import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

const useStyles = createUseStyles({
  canvaScreen: {
    width: "67%",
    height: "100%",
    position: "relative",
    "@media (max-width:767px)": {
      width: "100%",
      height: ({ windowHeight }: any) => windowHeight * 0.4 || "40vh",
    },
  },
  canvaBg: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
    display: ({ loadingCanva }: any) => (loadingCanva ? "none" : ""),
  },
  overlay: ({ backgroundColor }) => ({
    height: "100%",
    width: "100%",
    opacity: "0.66",
    background: backgroundColor || "none",
    position: "absolute",
    display: ({ loadingCanva }: any) => (loadingCanva ? "none" : ""),
  }),

  canvaFurniture: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
    display: ({ loadingCanva }: any) => (loadingCanva ? "none" : ""),
  },
});

export default function Canva() {
  const {
    selectedEnvironment,
    backgroundColor,
    windowHeight,
    loadingCanva,
    setLoadingCanva,
  } = useCanva();
  const classes = useStyles({ backgroundColor, windowHeight, loadingCanva });
  return (
    <div className={classes.canvaScreen}>
      <img
        className={classes.canvaBg}
        alt="background"
        src={selectedEnvironment.background}
        onLoad={() => setLoadingCanva(false)}
      />
      <div className={classes.overlay} />

      <img
        className={classes.canvaFurniture}
        alt="furniture"
        src={selectedEnvironment.furniture}
      />
    </div>
  );
}
