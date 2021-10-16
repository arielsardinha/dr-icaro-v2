import { useState } from "react";
import NextLink from "next/link";
import {
  BoxIcons,
  Header,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo,
  LinkText,
  NavBar,
} from "./menuNav.styled";
import { Apps } from "@material-ui/icons";
import {
  Box,
  Container,
  IconButton,
  MenuList,
  Toolbar,
  Divider,
  MenuItem,
} from "@material-ui/core";
import Procedimentos, { SobreNos, Clinica } from "./procedimentos";
import useIsMobile from "data/hook/useIsMobile";

const Nav = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

const HeaderDesktop = () => {
  return (
    <Header>
      <Toolbar component={Container}>
        <NavBar>
          <NextLink href="/">
            <LinkText>início</LinkText>
          </NextLink>
          <SobreNos />

          <Procedimentos />

          <Clinica />
          <NextLink href="/contato">
            <LinkText>contato</LinkText>
          </NextLink>
          <NextLink href="/blog-icaro">
            <LinkText>blog</LinkText>
          </NextLink>
          <BoxIcons>
            <a
              href="https://www.instagram.com/dricarosamuel/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <img src="iconMenu/intagram.png" alt="instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@dricarosamuel?lang=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              <img src="iconMenu/tiktok.png" alt="ticktok" />
            </a>
            <a
              href="https://www.facebook.com/dricarosamuel/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="iconMenu/facebook.png" alt="facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWsp-p8Z33mjBAYqjXDoxZA"
              target="_blank"
              rel="noreferrer"
            >
              <img src="iconMenu/youtube.png" alt="youtube" />
            </a>
          </BoxIcons>
        </NavBar>
      </Toolbar>
    </Header>
  );
};

const HeaderMobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [toogle, setToogle] = useState({
    procedimentos: false,
    sobreNos: false,
    clinica: false,
  });
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => {
            setToogle({
              procedimentos: false,
              sobreNos: false,
              clinica: false,
            });
            setDrawerOpen(true);
          }}
        >
          <Apps fontSize={"large"} />
        </IconButton>
        <HeaderLogo src={"/logo.png"} alt={"icaro samuel"} />
        <HeaderDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
          <MenuList>
            <MenuItem>Dr.Ícaro Samuel</MenuItem>
            <Divider />
            <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
              <NextLink href="/">
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  início
                </LinkText>
              </NextLink>
              <Box
                sx={{
                  height: toogle.sobreNos ? "170px" : "0",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    setToogle({
                      procedimentos: false,
                      sobreNos: true,
                      clinica: false,
                    });
                  }}
                >
                  <SobreNos />
                </button>
              </Box>
              <Box
                sx={{
                  height: toogle.procedimentos ? "370px" : "0",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    setToogle({
                      procedimentos: true,
                      sobreNos: false,
                      clinica: false,
                    });
                  }}
                >
                  <Procedimentos />
                </button>
              </Box>
              <Box
                sx={{
                  height: toogle.clinica ? "170px" : "0",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    setToogle({
                      procedimentos: false,
                      sobreNos: false,
                      clinica: true,
                    });
                  }}
                >
                  <Clinica />
                </button>
              </Box>
              <NextLink href="/contato">
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  contato
                </LinkText>
              </NextLink>
              <NextLink href="/blog-icaro">
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  blog
                </LinkText>
              </NextLink>
            </MenuItem>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Nav;
