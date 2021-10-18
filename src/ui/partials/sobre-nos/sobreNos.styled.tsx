import { Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const BoxStyled = styled("section")`
  display: flex;
  flex-direction: column;
`;

export const BoxUsers = styled(Container)`
  padding: ${({ theme }) => theme.spacing(20, 0)};
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    background-color: transparent;
    border: none;
  }
  .boxIcaro {
    .MuiAvatar-root {
      animation-name: popupUser;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      cursor: pointer;
    }
  }
`;

export const BoxEquipe = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .MuiBox-root {
    margin: ${({ theme }) => theme.spacing(5, 0)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerDrIcaro = styled("section")`
  background-image: url("/sobre-nos/dr-icaro-back.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: ${({ theme }) => theme.palette.text.primary};
  h1 {
    font-size: 2em;
  }
  p {
    text-indent: 1em;
    text-align: justify;
    &:last-child {
      text-indent: 0;
    }
  }
`;

export const BoxImages = styled("figure")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(10, 0)};
  img {
    margin: ${({ theme }) => theme.spacing(2)};
    &:first-of-type {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const BoxTexts = styled("div")`
  max-width: 550px;
  p,
  h1 {
    font-family: "giveny", serif;
  }
`;

export const ConhecaDrIcaro = styled("div")`
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: #000;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: conhecaDrIcaro 3s;
  animation-fill-mode: forwards;
  h1 {
    font-size: 4em;
    font-weight: 300;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.text.primary};
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    h1 {
      font-size: 2em;
    }
  }
`;
