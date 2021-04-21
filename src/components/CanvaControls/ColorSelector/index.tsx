import { CirclePicker } from "react-color";
import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

const useStyles = createUseStyles({
  environmentSelectorContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
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
    width: "100%",
  },
  buttonContainer: {
    marginTop: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function ColorSelector() {
  const classes = useStyles();
  const { handleSelectColor, backgroundColor } = useCanva();
  console.log(backgroundColor);
  return (
    <section className={classes.environmentSelectorContainer}>
      <div className={classes.content}>
        <span className={classes.title}>Selecione a cor do Forro</span>
        <div className={classes.buttonContainer}>
          <CirclePicker
            color={backgroundColor}
            colors={["#ffffff", "#727981", "#6a3a2c", "#9b7a5b", "#694737"]}
            onChange={(color) => handleSelectColor(color.hex)}
          />
        </div>
      </div>
    </section>
  );
}
