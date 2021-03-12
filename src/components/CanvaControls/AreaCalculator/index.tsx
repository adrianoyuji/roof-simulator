import { useState, useCallback } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  environmentSelectorContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%%",
    padding: "0.5rem",
  },
  title: {
    color: "#000",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.3rem",
  },
  content: {
    height: "100%",
    width: "100%%",
  },
});

export default function AreaCalculator() {
  const classes = useStyles();

  return (
    <section className={classes.environmentSelectorContainer}>
      <span className={classes.title}>Calculadora do Ambiente</span>
      <div className={classes.content}>conteudo</div>
    </section>
  );
}
