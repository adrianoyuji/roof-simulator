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
  sectionStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0.5rem",
  },
  title: {
    color: "#000",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.3rem",
  },
  subTitle: {
    color: "#000",
    fontSize: "1rem",
    marginBottom: "0.3rem",
    fontWeight: "bold",
  },
  content: {
    height: "100%",
    width: "100%%",
  },
  input: {
    width: 48,
  },
  inputLabel: {
    paddingRight: 4,
    fontWeight: "bold",
    fontSize: "0.8rem",
  },

  heightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  widthContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  totalArea: { textAlign: "center", fontWeight: "bold" },
  tableStyle: {
    borderCollapse: "collapse",
    marginTop: 4,
    marginBottom: 16,
    "& td": {
      backgroundColor: "#fff",
      fontSize: "0.9rem",
      border: "1px solid #aaa",
      padding: 4,
    },
    "& th": {
      padding: 4,
      fontSize: "0.9rem",
      textAlign: "left",
      backgroundColor: "#111827",
      color: "#fff",
    },
  },
});

const bladeWidthList = [
  { value: 100, title: "100mm" },
  { value: 200, title: "200mm" },
];

export default function AreaCalculator() {
  const classes = useStyles();
  const [bladeWidth, setBladeWidth] = useState<number>(100);
  const [areaWidth, setAreaWidth] = useState<string>("");
  const [areaHeight, setAreaHeight] = useState<string>("");

  const handleBladeSelect = useCallback((e) => {
    setBladeWidth(e.target.value);
  }, []);

  const renderProductLength = () => {
    let value = Number(areaWidth);
    let divisor = 1;
    let condition = true;
    while (condition) {
      if (value / divisor <= 9) {
        condition = false;
        return (value / divisor).toFixed(2);
      }
      divisor++;
    }

    return value;
  };

  const renderProductAmount = () => {
    let value = Number(areaHeight);
    value = value * 0.67 + 1;
    return value.toFixed(0);
  };

  return (
    <section className={classes.environmentSelectorContainer}>
      <span className={classes.title}>Calculadora do Ambiente</span>

      <div className={classes.content}>
        <section className={classes.sectionStyle}>
          <label className={classes.subTitle}>
            Selecione a largura da Lâmina
          </label>
          <select name="bladeWidth" onChange={handleBladeSelect}>
            {bladeWidthList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.title}
              </option>
            ))}
          </select>
        </section>
        <section className={classes.sectionStyle}>
          <span className={classes.subTitle}>
            Dimensões e orientação do Ambiente
          </span>
          <div className={classes.widthContainer}>
            <label className={classes.inputLabel}>Comprimento: </label>
            <input
              type="number"
              min={0}
              className={classes.input}
              value={areaWidth}
              onChange={(e) => setAreaWidth(e.target.value)}
            />{" "}
            m
          </div>

          <div className={classes.heightContainer}>
            <label className={classes.inputLabel}>Altura: </label>
            <input
              type="number"
              min={0}
              className={classes.input}
              value={areaHeight}
              onChange={(e) => setAreaHeight(e.target.value)}
            />{" "}
            m
            <img
              src="https://www.plastilit.com.br/imagens/simulador/horizontal.png"
              alt="orientacao"
            />
          </div>
        </section>
        <section className={classes.sectionStyle}>
          <label className={classes.subTitle}>Resultado</label>
          <table className={classes.tableStyle}>
            <tr>
              <th>Produto</th>
              <th>Comprimento</th>
              <th>Quantidade (lâmina)</th>
            </tr>
            <tr>
              <td>Forro {bladeWidth}mm</td>
              <td>{renderProductLength()}</td>
              <td>{(Number(areaHeight) / (bladeWidth / 1000)).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Barras para acabamento</td>
              <td>6m lineares</td>
              <td>{renderProductAmount()}</td>
            </tr>
          </table>
          <span className={classes.totalArea}>
            Área total: {(Number(areaHeight) * Number(areaWidth)).toFixed(2)} m²
          </span>
        </section>
      </div>
    </section>
  );
}
