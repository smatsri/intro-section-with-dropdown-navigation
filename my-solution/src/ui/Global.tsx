import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export type ThemeProps = { theme: Theme }

export const GlobalStyles = createGlobalStyle<ThemeProps>`

@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Epilogue', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => (theme.colors.mediumGray)};
  max-width:1440px;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  text-decoration:none;
  color: inherit;
}

ul {
  list-style-type:none;
  padding: 0;
  margin: 0;
}
`