import { useState, useCallback } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%%",
    overflowY: "scroll",
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
    width: 42,
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
        return (Math.ceil((value / divisor) * 10) / 10).toFixed(2);
      }
      divisor++;
    }

    return value;
  };

  const renderAcabamentoAmount = () => {
    let height = (Number(areaHeight) / 6) * 2;
    let width = (Number(areaWidth) / 6) * 2;

    return (height + width).toFixed(0);
  };
  const renderProductQuantity = () => {
    let amount = Math.ceil(
      (Number(areaHeight) * Number(areaWidth)) /
        (Number(renderProductLength()) / 10) /
        (bladeWidth / 100)
    );
    return isNaN(amount) ? 0 : amount;
  };

  const renderEmendaHAmount = () => {
    if (Number(areaWidth) > 0) {
      let colAmount = Math.ceil(
        Number(areaWidth) / Number(renderProductLength())
      );
      if (colAmount > 1) {
        let rowAmount = Number(areaHeight) / 6;
        if (Number(areaHeight) % 6 > 0) {
          rowAmount++;
        }
        return Math.floor(rowAmount) * (colAmount - 1);
      }
    }
    return 0;
  };

  return (
    <section className={classes.container}>
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
            <label className={classes.inputLabel}>Largura: </label>
            <input
              type="number"
              min={0}
              className={classes.input}
              value={areaHeight}
              onChange={(e) => setAreaHeight(e.target.value)}
            />{" "}
            m
            <img
              src={process.env.PUBLIC_URL + "/images/horizontal.png"}
              alt="orientacao"
            />
          </div>
        </section>
        <section className={classes.sectionStyle}>
          <label className={classes.subTitle}>Resultado</label>
          <table className={classes.tableStyle}>
            <tbody>
              <tr>
                <th>Produto</th>
                <th>Comprimento</th>
                <th>Quantidade (lâmina)</th>
              </tr>
              <tr>
                <td>Forro {bladeWidth}mm</td>
                <td>{renderProductLength()}</td>
                <td>{renderProductQuantity()}</td>
              </tr>
              <tr>
                <td>Barras para acabamento</td>
                <td>6m lineares</td>
                <td>{renderAcabamentoAmount()}</td>
              </tr>
              {/* <tr>
                <td>Emenda H</td>
                <td>6m</td>
                <td>{renderEmendaHAmount()}</td>
              </tr> */}
            </tbody>
          </table>
          <span className={classes.totalArea}>
            Área total: {(Number(areaHeight) * Number(areaWidth)).toFixed(2)} m²
          </span>
        </section>
      </div>
    </section>
  );
}
