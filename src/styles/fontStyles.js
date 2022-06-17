import { createGlobalStyle } from "styled-components";
import quickSand from "./fonts/Quicksand-Bold.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'wonder';
  src: url(${quickSand}) format('openType');
  font-weight: 900;
  font-style: normal;
}
`;

export default FontStyles;
