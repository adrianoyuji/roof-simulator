import React from "react";
import { createUseStyles } from "react-jss";

interface Props {
  color?: string;
  textColor?: string;
  title: string;
  onPress(): void;
}

const useStyles = createUseStyles({
  buttonStyles: ({ color, textColor }) => ({
    borderWidth: "0.15rem",
    backgroundColor: color || "#111827",
    borderRadius: "8px",
    width: "100%",
    height: "1.4rem",
    padding: "0.5rem",
    textAlign: "center",
    cursor: "pointer",
    color: textColor || "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform .2s",
    fontWeight: "bold",
    "&:hover": {
      filter: "brightness(30px)",
      transform: "scale(0.9)",
    },
  }),
});

export default function ColorButton({
  color,
  textColor,
  title,
  onPress,
}: Props) {
  const classes = useStyles({ color, textColor });
  return (
    <div className={classes.buttonStyles} onClick={onPress}>
      {title}
    </div>
  );
}
