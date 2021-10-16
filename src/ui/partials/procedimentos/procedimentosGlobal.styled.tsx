import { styled } from "@material-ui/core/styles";

export const Section = styled("section")`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(20, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  h1,
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 300;
  }
  span,
  h1 {
    font-weight: bold;
    font-family: "gishabd", sans-serif;
  }
  h1 {
    font-size: 3em;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    h1 {
      font-size: 2em;
    }
  }
`;
