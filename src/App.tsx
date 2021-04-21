import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Header from "src/components/ui/Header";
import Body from "src/components/ui/Body";
import { useCanva } from "./hooks/canva";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    height: ({ windowHeight }: any) => windowHeight || "100vh",
    width: "100vw",
    backgroundColor: "#e5e5e5",
    fontFamily: "sans-serif",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  body: { flex: 8, display: "flex", flexDirection: "row" },
});

const App = () => {
  const { windowHeight } = useCanva();
  const classes = useStyles({ windowHeight });

  return (
    <main className={classes.app}>
      <Header />
      <Body />
    </main>
  );
};

export default App;
