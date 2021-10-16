import { styled } from "@material-ui/core/styles";
import { AppBar, Drawer, AppBarProps } from "@material-ui/core";

export const Header = styled("div")`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.palette.primary.light};
  width: 100%;
  z-index: 1;
`;

export const NavBar = styled("nav")`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    cursor: pointer;
  }
`;

export const BoxIcons = styled("div")`
  display: flex;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    margin: ${({ theme }) => theme.spacing(0, 0.5)};
    border-radius: 10px;
    &:hover {
      background-color: #f7ac62;
    }
  }
`;

export const LinkText = styled("a")`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  margin: ${({ theme }) => theme.spacing(0, 2)};
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const BoxProcedimentos = styled("nav")`
  margin: ${({ theme }) => theme.spacing(0, 2)};
  position: relative;
  a {
    cursor: pointer;
  }
  &:hover {
    div {
      height: 355px;
    }
  }
  div {
    &:hover {
      height: 355px;
    }
    transition: 1s;
    position: absolute;
    height: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
  }
`;

export const Procedimento = styled("a")`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.7em;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: ${({ theme }) => theme.spacing(1, 0)};
  border-radius: 3px;
  margin: ${({ theme }) => theme.spacing(1, 0)};
  &:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const HeaderLogo = styled("img")`
  height: 50px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;

export const HeaderDrawer = styled(Drawer)`
  .MuiPaper-root {
    padding: ${({ theme }) => theme.spacing()};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  .MuiDivider-root {
    margin: ${({ theme }) => theme.spacing(2)};
    border-color: #fff;
  }
  button {
    background: transparent;
    border: none;
  }
`;

export const HeaderAppBar = styled((props: AppBarProps) => (
  <AppBar position={"sticky"} {...props} />
))`
  &.MuiAppBar-root {
    background-color: ${({ theme }) => theme.palette.primary.light};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .MuiToolbar-root {
    display: grid;
    grid-template-columns: 52px auto 52px;
    justify-content: space-between;
  }
`;
