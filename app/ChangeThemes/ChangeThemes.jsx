import React from "react";
import { ThemeProvider } from "next-themes";
const ChangeThemes = ({ children }) => {
  return (
    <div>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
};

export default ChangeThemes;
