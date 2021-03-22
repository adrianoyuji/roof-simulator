import { CirclePicker } from "react-color";
import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

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
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%%",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function ColorSelector() {
  const classes = useStyles();
  const { handleSelectColor, backgroundColor } = useCanva();
  return (
    <section className={classes.environmentSelectorContainer}>
      <div className={classes.content}>
        <span className={classes.title}>Selecione a cor do Forro</span>
        <div className={classes.buttonContainer}>
          <CirclePicker
            color={backgroundColor}
            onChange={(color) => handleSelectColor(color.hex)}
          />
        </div>
      </div>
    </section>
  );
}
