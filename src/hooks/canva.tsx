import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import Environment from "src/interfaces/Environment";

interface CanvaContextData {
  selectedEnvironment: Environment;
  envList: Environment[];
  currentIndex: number;
  backgroundColor: string;
  handleSelectEnvironment(env: Environment): void;
  handleChangeIndex(index: number): void;
  handleSelectColor(hexCode: string): void;
  windowHeight: number;
  windowWidth: number;
  loadingCanva: boolean;
  setLoadingCanva(bool: boolean): void;
}

const CanvaContext = createContext<CanvaContextData>({} as CanvaContextData);

const envList: Environment[] = [
  {
    background: process.env.PUBLIC_URL + "/images/cozinha.png",
    furniture: process.env.PUBLIC_URL + "/images/cozinha-moveis.png",
  },
  {
    background: process.env.PUBLIC_URL + "/images/garagem.jpg",
    furniture: process.env.PUBLIC_URL + "/images/garagem-moveis.png",
  },
  {
    background: process.env.PUBLIC_URL + "/images/sala.jpg",
    furniture: process.env.PUBLIC_URL + "/images/sala-moveis.png",
  },
];

const initial_enviroment: Environment = {
  background: process.env.PUBLIC_URL + "/images/cozinha.png",
  furniture: process.env.PUBLIC_URL + "/images/cozinha-moveis.png",
};

export const CanvaProvider: React.FC = ({ children }) => {
  const [loadingCanva, setLoadingCanva] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("#a2a2a2");
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment>({
    ...initial_enviroment,
  });
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  useEffect(() => {
    function updateSize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);

    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handleSelectEnvironment = useCallback(
    (env: Environment) => {
      if (env.background !== selectedEnvironment.background) {
        setLoadingCanva(true);
        setSelectedEnvironment({ ...env });
      }
    },
    [setSelectedEnvironment, setLoadingCanva, selectedEnvironment]
  );

  const handleChangeIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleSelectColor = useCallback((hexCode: string) => {
    setBackgroundColor(hexCode);
  }, []);

  return (
    <CanvaContext.Provider
      value={{
        selectedEnvironment,
        envList,
        currentIndex,
        backgroundColor,
        handleSelectEnvironment,
        handleChangeIndex,
        handleSelectColor,
        windowHeight,
        windowWidth,
        loadingCanva,
        setLoadingCanva,
      }}
    >
      {children}
    </CanvaContext.Provider>
  );
};

export const useCanva = () => {
  const context = useContext(CanvaContext);

  return context;
};

export default { useCanva, CanvaProvider };
