const defaultOpactiy: number = 1;

export const colors = {
  primary: (opacity: number = defaultOpactiy) => `rgba(203, 12, 159, ${opacity})`,
  secondary: (opacity: number = defaultOpactiy) => `rgba(131, 146, 171, ${opacity})`,
  info: (opacity: number = defaultOpactiy) => `rgba(23, 193, 232, ${opacity})`,
  warning: (opacity: number = defaultOpactiy) => `rgba(251, 207, 51, ${opacity})`,
  danger: (opacity: number = defaultOpactiy) => `rgba(255, 99, 132, ${opacity})`,
  dark: (opacity: number = defaultOpactiy) => `rgba(33, 37, 41, ${opacity})`,
  success: (opacity: number = defaultOpactiy) => `rgba(130, 214, 22, ${opacity})`
} as const;
