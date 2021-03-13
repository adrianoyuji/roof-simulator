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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 8,
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    borderRadius: 4,
    objectFit: "cover",
    width: "100%",
    height: 128,
    transition: "transform .2s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.95)",
    },
    "&:active": {
      transform: "scale(0.90)",
    },
  },
});

export default function EnvironmentSelector() {
  const { handleSelectEnvironment, envList, handleChangeIndex } = useCanva();
  const classes = useStyles();

  return (
    <section className={classes.environmentSelectorContainer}>
      <span className={classes.title}>Selecione um Ambiente</span>
      <div className={classes.content}>
        {envList.map((env, index) => (
          <img
            src={env.background}
            key={index}
            alt={`ambiente-${index}`}
            className={classes.imageContainer}
            onClick={() => {
              handleSelectEnvironment(env);
              handleChangeIndex(1);
            }}
          />
        ))}
      </div>
    </section>
  );
}
