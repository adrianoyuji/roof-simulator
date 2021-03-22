import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

import ColorSelector from "./ColorSelector";
import EnvironmentSelector from "./EnvironmentSelector";
import AreaCalculator from "./AreaCalculator";
import Button from "src/components/Button";

const useStyles = createUseStyles({
  controls: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "33%",
    borderLeft: "solid",
    borderLeftColor: "#111827",
    "@media (max-width:767px)": {
      width: "100%",
      height: window.innerHeight * 0.6 || "60vh",
      borderLeft: "none",
      borderLeftColor: "none",
      borderTop: "solid",
      borderTopColor: "#111827",
    },
  },
  buttonsContainers: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  controlsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    overflowY: "scroll",
    overflowX: "hidden",
  },
});

export default function CanvaControls() {
  const { currentIndex, handleChangeIndex } = useCanva();

  const classes = useStyles();

  const renderSection = () => {
    switch (currentIndex) {
      case 0:
        return <EnvironmentSelector />;
      case 1:
        return <ColorSelector />;
      case 2:
        return <AreaCalculator />;
      default:
        return <EnvironmentSelector />;
    }
  };

  const buttonList = [
    { title: "Ambiente", id: 0 },
    { title: "Cores", id: 1 },
    { title: "Calculadora", id: 2 },
  ];

  return (
    <div className={classes.controls}>
      <div className={classes.buttonsContainers}>
        {buttonList.map((button, index) => (
          <Button
            title={button.title}
            key={button.id}
            //@ts-ignore
            onPress={() => handleChangeIndex(index)}
            isSelected={currentIndex === index}
          />
        ))}
      </div>
      <section className={classes.controlsContainer}>{renderSection()}</section>
    </div>
  );
}
