import React, { createContext, useState, useContext, useCallback } from "react";
import Environment from "src/interfaces/Environment";

interface CanvaContextData {
  selectedEnvironment: Environment;
  envList: Environment[];
  currentIndex: number;
  backgroundColor: string;
  handleSelectEnvironment(env: Environment): void;
  handleChangeIndex(index: number): void;
  handleSelectColor(hexCode: string): void;
}

const CanvaContext = createContext<CanvaContextData>({} as CanvaContextData);

const envList: Environment[] = [
  {
    background: process.env.PUBLIC_URL + "/images/background.jpg",
    roof: process.env.PUBLIC_URL + "/images/roof.png",
    furniture: process.env.PUBLIC_URL + "/images/furniture.png",
  },
  {
    background: process.env.PUBLIC_URL + "/images/background2.jpg",
    roof: process.env.PUBLIC_URL + "/images/roof.png",
    furniture: process.env.PUBLIC_URL + "/images/furniture.png",
  },
];

const initial_enviroment = {
  background: process.env.PUBLIC_URL + "/images/background.jpg",
  roof: process.env.PUBLIC_URL + "/images/roof.png",
  furniture: process.env.PUBLIC_URL + "/images/furniture.png",
};

export const CanvaProvider: React.FC = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFF");
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment>({
    ...initial_enviroment,
  });

  const handleSelectEnvironment = useCallback(
    (env: Environment) => {
      setSelectedEnvironment({ ...env });
    },
    [setSelectedEnvironment]
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
