import React from "react";
import { createUseStyles } from "react-jss";

interface Props {
  color?: string;
  hoverColor?: string;
  textColor?: string;
  title: string;
  isSelected?: boolean;
  onPress(): void;
}

const useStyles = createUseStyles({
  unselectedButton: ({ color, textColor }) => ({
    borderWidth: "0.15rem",
    backgroundColor: color || "#111827",
    borderRadius: "8px",
    width: "100%",
    padding: "0.5rem",
    margin: "0.4rem",
    textAlign: "center",
    cursor: "pointer",
    color: textColor || "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform .2s",
    "&:hover": ({ hoverColor }) => ({
      backgroundColor: hoverColor || "#111827",
      color: hoverColor || "#e5e5e5",
      transform: "scale(0.9)",
    }),
  }),
  selectedButton: ({ color, textColor }) => ({
    boxSizing: "border-box",
    border: "solid",
    borderWidth: "0.15rem",
    borderColor: "#111827",
    backgroundColor: color || "#fff",
    borderRadius: "8px",
    width: "100%",
    padding: "0.5rem",
    margin: "0.4rem",
    textAlign: "center",
    cursor: "pointer",
    color: textColor || "black",
    transition: "transform .2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": ({ hoverColor }) => ({
      backgroundColor: hoverColor || "#fff",
      color: hoverColor || "#111827",
      transform: "scale(0.9)",
    }),
  }),
});

export default function Button({
  color,
  hoverColor,
  title,
  isSelected = false,
  onPress,
}: Props) {
  const classes = useStyles({ color, hoverColor });
  return (
    <div
      className={isSelected ? classes.selectedButton : classes.unselectedButton}
      onClick={onPress}
    >
      {title}
    </div>
  );
}
