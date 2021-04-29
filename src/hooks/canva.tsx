import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import Environment from "src/interfaces/Environment";

import envList from "src/utils/environments";

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
  ceilingColor: number;
  setCeilingColor(num: number): void;
}

const CanvaContext = createContext<CanvaContextData>({} as CanvaContextData);

export const CanvaProvider: React.FC = ({ children }) => {
  const [loadingCanva, setLoadingCanva] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [ceilingColor, setCeilingColor] = useState<number>(0);
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment>({
    ...envList[0],
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
      if (env.preview !== selectedEnvironment.preview) {
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
        ceilingColor,
        setCeilingColor,
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
