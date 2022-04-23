export const theme = {
  colors: {
    almostWhite: "hsl(0, 0%, 98%)",
    mediumGray: "hsl(0, 0%, 41%)",
    almostBlack: "hsl(0, 0%, 8%)",
  }
}

export type Theme = typeof theme

export const pick = (key:keyof Theme) => 0;

