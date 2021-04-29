import { CirclePicker, ChromePicker } from "react-color";
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
    padding: "0.3rem 0",
  },
  separator: {
    padding: "0.3rem 0",
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
  const {
    handleSelectColor,
    backgroundColor,
    ceilingColor,
    setCeilingColor,
  } = useCanva();

  const colorToIndex = (hex: string) => {
    switch (hex) {
      case "#ffffff":
        return 0;
      case "#727981":
        return 1;
      case "#a13d2d":
        return 2;
      case "#9b7a5b":
        return 3;
      case "#694737":
        return 4;
      default:
        return 0;
    }
  };
  const indexToColor = (index: number) => {
    switch (index) {
      case 0:
        return "#ffffff";
      case 1:
        return "#727981";
      case 2:
        return "#a13d2d";
      case 3:
        return "#9b7a5b";
      case 4:
        return "#694737";
      default:
        return "#ffffff";
    }
  };

  return (
    <section className={classes.environmentSelectorContainer}>
      <div className={classes.content}>
        <div className={classes.separator}>
          <span className={classes.title}>Selecione a cor do Forro</span>
          <div className={classes.buttonContainer}>
            <CirclePicker
              color={indexToColor(ceilingColor)}
              colors={["#ffffff", "#727981", "#a13d2d", "#9b7a5b", "#694737"]}
              onChange={(color) => setCeilingColor(colorToIndex(color.hex))}
            />
          </div>
        </div>
        <div className={classes.separator}>
          <span className={classes.title}>Selecione a cor das paredes</span>
          <div className={classes.buttonContainer}>
            <ChromePicker
              color={backgroundColor}
              onChange={(color) => handleSelectColor(color.hex)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
