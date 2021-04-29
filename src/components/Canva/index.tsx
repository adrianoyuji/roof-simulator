import { createUseStyles } from "react-jss";
import { useCanva } from "src/hooks/canva";

const useStyles = createUseStyles({
  canvaScreen: {
    width: "67%",
    height: "100%",
    position: "relative",
    "@media (max-width:767px)": {
      width: "100%",
      height: ({ windowHeight }: any) => windowHeight * 0.55 || "55vh",
    },
  },

  overlay: ({ backgroundColor, loadingCanva }) => ({
    height: "100%",
    width: "100%",
    opacity: "0.555",
    background: backgroundColor || "none",
    position: "absolute",
    display: loadingCanva ? "none" : "",
  }),

  objectOverlay: {
    objectFit: "fill",
    height: "100%",
    width: "100%",
    position: "absolute",
    display: ({ loadingCanva }: any) => (loadingCanva ? "none" : ""),
  },
});

export default function Canva() {
  const {
    selectedEnvironment,
    backgroundColor,
    windowHeight,
    loadingCanva,
    setLoadingCanva,
    ceilingColor,
  } = useCanva();
  const classes = useStyles({ backgroundColor, windowHeight, loadingCanva });
  return (
    <div className={classes.canvaScreen}>
      <img
        className={classes.objectOverlay}
        alt="furniture"
        src={selectedEnvironment.walls}
        onLoad={() => setLoadingCanva(false)}
      />
      <div className={classes.overlay} />
      <img
        className={classes.objectOverlay}
        alt="furniture"
        src={selectedEnvironment.colors[ceilingColor].color}
        onLoad={() => setLoadingCanva(false)}
      />
      <img
        className={classes.objectOverlay}
        alt="furniture"
        src={selectedEnvironment.furniture}
        onLoad={() => setLoadingCanva(false)}
      />
    </div>
  );
}
