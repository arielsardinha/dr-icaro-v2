import { styled } from "@material-ui/core/styles";
import { Container as MuiContainer } from "@material-ui/core";

export const BoxHeader = styled("div")`
  width: 100%;
  background-image: url("/back-header-degrade.png"),
    linear-gradient(0deg, rgba(1, 1, 1, 1) 0%, rgba(0, 0, 0, 1) 100%);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
`;

export const Title = styled("h2")`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.palette.text.primary};
  color: transparent;
  margin: 0;
  font-size: 5em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 3em;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 2.5em;
  }
`;

export const Logo = styled("img")`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 250px;
    height: 100px;
  }
`;

export const DrIcaroImg = styled("img")`
  max-width: 400px;
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 100%;
  }
`;

export const BoxTextoIcaro = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  text-indent: 1.5em;
  p:first-of-type {
    margin-top: 0;
    &::first-letter {
      font-size: 3rem;
    }
  }
`;

export const BoxImages = styled("figure")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(10, 0)};
  a {
    display: flex;
    justify-content: center;
  }
  img {
    margin: ${({ theme }) => theme.spacing(2)};
    &:first-of-type {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Container = styled(MuiContainer)`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text.primary};
  p {
    margin: 0;
    position: relative;
    top: -25px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 100vh;
    p {
      top: 0;
    }
  }
`;
