
const BaseColor = {
  black: "#000000",
  white: "#ffffff",
  primary: "#4ccfad",
  danger: "#EE4C50",
  overlay: "#18191aeb",
};
const fontSize = {
  xs: "14px",
  sm: "16px",
  re: "20px",
  md: "24px",
  lg: "28px",
  xl: "32px",
  xxl: "48px",
};

const color = {
    ...BaseColor,
    text: "#18181a",
    lighterText: "#8b8b8c",
    hightText: "#f54f64",
    secondaryBg: "#ffffff",
    primaryBg: "#f3f7f8",
    highlight: "#f8879f",
    buttonHight: "#f8879f"
}
// export const themeDark = {
//   mode: "dark",
//   ...mixins,
//   fontSize: {
//     ...fontSize,
//   },
//   shadow: {
//     ...shadow,
//   },
//   color: {
//     ...BaseColor,
//     primaryText: "#F2F5FF",
//     darkerText: "#F2F5FF",
//     lighterText: "#ABABAB",
//     background: "#18191A",
//     secondaryBg: "#202020",
//     border: "#262626",
//     secondaryIcon: "#65676B",
//     linkText: "#797F8A",
//   },
// };

// export const themeLight = {
//   mode: "light",
//   ...mixins,
//   fontSize: {
//     ...fontSize,
//   },
//   shadow: {
//     ...shadow,
//   },
//   color: {
//     ...BaseColor,
//     primaryText: "#4569FF",
//     darkerText: "#1B1B1B",
//     lighterText: "#5F5F5F",
//     background: "#ffffff",
//     secondaryBg: "#F2F5FF",
//     border: "#F0F4F8",
//     secondaryIcon: "#9EACBF",
//     linkText: "#516272",
//   },
// };

const theme = {
  fontSize: {
    ...fontSize,
  },
  color: {
    ...color,
  }
}

export default theme;