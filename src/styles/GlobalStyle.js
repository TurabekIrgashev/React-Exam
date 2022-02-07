import { createGlobalStyle } from "styled-components";
import colors from "./Colors";


const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    color: #777675;
    font-family: 'Montserrat', sans-serif;
  }
  ul{
      list-style-type: none;
  }
  .btnIcon{
      font-size: 24px;
  }
  a{
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
  }
  .textPrimary{
      font-size: 72px;
  }
  .cardFurniture{
    flex-direction: column;
    transition: 0.5s;
  }
  .line{
    height: 2px;
    border: 1px solid black;
    background-color: black;
  }
  .logoDiv{
    height: 100px;
    background-color: #143043;
  }
  .logo{
    width: 200px;
    height: 50px;
  }
  .btnAdmin{
    background-color: #143043;
    color: white;
  }
  .plusBtn{
    width: 50px;
    font-size: 50px;
    height: 50px;
  }
  .primaryBtn{
    position: absolute;
    bottom: 100px;
    right: 0;
    opacity: 0;
    transition: 0.5s;
  }
  .btnSecond{
    transition: 0.5s;
  }
  .btnSecond:active{
    transform: scale(1.1);
    transition: 0.5s;
  }
  .cardHover:hover .primaryBtn{
    opacity: 1;
    transition: 0.5s;
  }
`;

export default GlobalStyle;
