import { styled } from "@material-ui/core/styles";

export const Section = styled("section")`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(5, 0)};
`;

export const BoxData = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  h1,
  h4 {
    font-weight: 400;
  }
  p,
  h1 {
    margin: ${({theme})=>theme.spacing(1)};
    font-family: "mongolian";
  }
`;
