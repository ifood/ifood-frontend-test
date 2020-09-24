import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
 
  return (
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
  );
};

export default Routes;