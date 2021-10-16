import { styled } from "@material-ui/core/styles";

export const Header = styled("header")`
  height: 100vh;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url("/header-back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: homeFrame 4s;
  animation-fill-mode: forwards;
`;

export const Logo = styled("img")``;

export const Text = styled("h1")`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;
