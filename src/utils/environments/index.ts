import Environment from "src/interfaces/Environment";

const publicPath = process.env.PUBLIC_URL;

const envList: Environment[] = [
  {
    name: "Sala de Estar",
    preview: publicPath + "/images/sala/preview.png",
    walls: publicPath + "/images/sala/paredes.png",
    furniture: publicPath + "/images/sala/furniture.png",
    colors: [
      {
        color: publicPath + "/images/sala/cores/sala_cor5.png",
      },
      {
        color: publicPath + "/images/sala/cores/sala_cor4.png",
      },
      {
        color: publicPath + "/images/sala/cores/sala_cor3.png",
      },
      {
        color: publicPath + "/images/sala/cores/sala_cor2.png",
      },
      {
        color: publicPath + "/images/sala/cores/sala_cor1.png",
      },
    ],
  },
  {
    name: "Garagem",
    preview: publicPath + "/images/garagem/preview.png",
    walls: publicPath + "/images/garagem/paredes.png",
    furniture: publicPath + "/images/garagem/furniture.png",
    colors: [
      {
        color: publicPath + "/images/garagem/cores/garagem_cor5.png",
      },
      {
        color: publicPath + "/images/garagem/cores/garagem_cor4.png",
      },
      {
        color: publicPath + "/images/garagem/cores/garagem_cor3.png",
      },
      {
        color: publicPath + "/images/garagem/cores/garagem_cor2.png",
      },
      {
        color: publicPath + "/images/garagem/cores/garagem_cor1.png",
      },
    ],
  },
];

export default envList;
