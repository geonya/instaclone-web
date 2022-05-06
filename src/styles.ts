import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
	fontColor: "#2c2c2c",
	bgColor: "#FAFAFA",
	borderColor: "rgb(219, 219, 219)",
	accentBlue: "#0095f6",
};
export const darkTheme: DefaultTheme = {
	fontColor: "#FAFAFA",
	bgColor: "#2c2c2c",
	borderColor: "rgb(219, 219, 219)",
	accentBlue: "#0095f6",
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
    color:rgb(38, 38, 38);
    font-size:14px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
