import React from "react";
import { createUseStyles } from "react-jss";
import Header from "src/components/ui/Header";
import Body from "src/components/ui/Body";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f5f5",
    fontFamily: "sans-serif",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  body: { flex: 8, display: "flex", flexDirection: "row" },
});

const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.app}>
      <Header />
      <Body />
    </main>
  );
};

export default App;
