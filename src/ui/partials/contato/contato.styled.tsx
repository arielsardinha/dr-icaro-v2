import { styled } from "@material-ui/core/styles";

export const Section = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  color: currentColor;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BoxData = styled("div")`
  display: flex;
  flex-direction: column;
  width: 27%;
  span {
    white-space: nowrap;
    text-align: left;
    margin: ${({ theme }) => theme.spacing(1, 5)};
  }
  &:last-child {
    position: relative;
    &::after {
      content: ".";
      position: absolute;
      background-color: ${({ theme }) => theme.palette.text.primary};
      top: 20px;
      bottom: 20px;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
    span {
      text-align: center;
    }
    &:last-child {
      position: relative;
      &::after {
        content: ".";
        position: absolute;
        background-color: transparent;
        top: 20px;
        bottom: 20px;
      }
    }
  }
`;

export const BoxSecFrame = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(10, 0, 5, 0)};
  div:first-of-type {
    span {
      text-align: right;
    }
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing(5)};
    div:first-of-type {
      span {
        text-align: center;
      }
    }
  }
`;
