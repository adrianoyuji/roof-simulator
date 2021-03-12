import React from "react";

import { CanvaProvider } from "./canva";

const AppProvider: React.FC = ({ children }) => {
  return <CanvaProvider>{children}</CanvaProvider>;
};

export default AppProvider;
