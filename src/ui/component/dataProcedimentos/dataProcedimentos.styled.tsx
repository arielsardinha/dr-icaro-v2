import { styled } from "@material-ui/core/styles";
import { Container, Theme, Button } from "@material-ui/core";

export const BoxText = styled("div")`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 0 20px 20px;
  font-size: 0.8em;
  span {
    font-weight: bold;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: ${({ theme }) => theme.spacing(28)};
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const BoxProcedimentos = styled(Container)`
  display: flex;
`;

function handle(theme: Theme, isSelected?: boolean) {
  if (isSelected) {
    return `
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.text.secondary};
    border-radius: 20px 0 0 20px;
    `;
  }
  return `
    border-radius: 20px;
    color: ${theme.palette.text.primary};
    margin: ${theme.spacing(0, 3, 1, 0)};
    border: solid 1px ${theme.palette.grey[300]};
    background-color: transparent;
    ${theme.breakpoints.down("xs")} {
      margin: ${theme.spacing(0, 0, 1, 0)};
    }
  `;
}

export const InputTypeProcedimentos = styled("button", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>`
  cursor: pointer;
  width: 200px;
  text-align: left;
  white-space: nowrap;
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  ${({ theme, isSelected }) => handle(theme, isSelected)}
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 180px;
  }
`;

export const BoxInputs = styled("div")`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up("md")} {
    position: fixed;
    top: 25vh;
  }
`;

function handleSelect(theme: Theme, isSelect: boolean) {
  if (isSelect)
    return `
    color:${theme.palette.text.secondary};
  `;
  return `
    color:${theme.palette.text.primary};
  `;
}

export const BoxTextSelect = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSelect",
})<{ isSelect?: boolean }>`
  p,
  li {
    ${({ theme, isSelect }) => handleSelect(theme, isSelect)}
  }
  h2,
  h1 {
    font-size: 1em;
    text-align: left;
    ${({ theme, isSelect }) => handleSelect(theme, isSelect)}
    margin: ${({ theme }) => theme.spacing(4, 0, 0, 3)};
  }
`;
