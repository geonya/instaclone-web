import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
	maxWidth: "930px",
	fontColor: "#2c2c2c",
	bgColor: "#FAFAFA",
	borderColor: "rgb(219, 219, 219)",
	accentBlue: "#0095f6",
	accentGreen: "#2ecc71",
};
export const darkTheme: DefaultTheme = {
	maxWidth: "930px",
	fontColor: "#FAFAFA",
	bgColor: "#2c2c2c",
	borderColor: "rgb(219, 219, 219)",
	accentBlue: "#0095f6",
	accentGreen: "#2ecc71",
};

export const GlobalStyles = createGlobalStyle`
  ${reset};
  input {
    all:unset;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.fontColor};
    font-size:14px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;
