import { Button, Container as MuiContainer } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Section = styled("section")`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("clinica/fundo.png");
  background-position: center;
  background-size: cover;
  padding: ${({ theme }) => theme.spacing(10, 0)};
  h2 {
    font-weight: 400;
    font-size: 2em;
    color: ${({ theme }) => theme.palette.text.primary};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: "giveny", serif;
  }
`;

export const Container = styled(MuiContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxTexts = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #663300;
  max-width: 700px;
  h1 {
    font-size: 2em;
    font-weight: 400;
    margin: ${({ theme }) => theme.spacing(1, 0)};
    span {
      white-space: nowrap;
    }
  }
  P {
    font-family: "giveny", serif;
    font-size: 1.5em;
    margin: ${({ theme }) => theme.spacing(1, 0)};
  }
`;

export const InputAgendar = styled(Button)`
  color: #000;
  background-color: #c9b090;
  text-transform: uppercase;
  text-align: center;
  border-radius: 30px;
  &:hover {
    background-color: #644321;
  }
`;

export const Logo = styled("img")`
  width: 250px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Video = styled("div")``;
