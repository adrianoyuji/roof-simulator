import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    height: "8%",
    backgroundColor: "#111827",
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const Header = () => {
  const classes = useStyles();

  return <header className={classes.header}>Logo</header>;
};

export default Header;
