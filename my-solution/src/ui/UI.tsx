import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { theme } from "./theme";



const UI = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default UI;