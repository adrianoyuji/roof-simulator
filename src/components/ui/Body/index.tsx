import React from "react";
import Canva from "src/components/Canva";
import CanvaControls from "src/components/CanvaControls";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  body: {
    display: "flex",
    height: "92%",
    flexDirection: "row",
    "@media (max-width:767px)": {
      flexDirection: "column",
    },
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <section className={classes.body}>
      <Canva />
      <CanvaControls />
    </section>
  );
};

export default Body;
