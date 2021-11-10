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
          <NextLink href="/index.html" passHref>
            <LinkText rel="prev">início</LinkText>
          </NextLink>
          <SobreNos />

          <Procedimentos />

          <Clinica />
          <NextLink href="/contato.html" passHref>
            <LinkText rel="next">contato</LinkText>
          </NextLink>
          <NextLink href="/blog.html" passHref>
            <LinkText rel="next">blog</LinkText>
          </NextLink>
          <BoxIcons>
            <a
              href="https://www.instagram.com/dricarosamuel/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/iconMenu/intagram.png"
                alt="instagram"
                title="instagram"
              />
            </a>
            <a
              href="https://www.tiktok.com/@dricarosamuel?lang=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/iconMenu/tiktok.png" alt="ticktok" title="ticktok" />
            </a>
            <a
              href="https://www.facebook.com/dricarosamuel/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/iconMenu/facebook.png"
                alt="facebook"
                title="facebook"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWsp-p8Z33mjBAYqjXDoxZA"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/iconMenu/youtube.png" alt="youtube" title="youtube" />
            </a>
          </BoxIcons>
        </NavBar>
      </Toolbar>
    </Header>
  );
};

const HeaderMobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false),
    [procedimentos, setProcedimentos] = useState(false),
    [sobreNos, setSobreNos] = useState(false),
    [clinica, setClinica] = useState(false);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => {
            setProcedimentos(false);
            setSobreNos(false);
            setClinica(false);
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
              <NextLink href="/index.html" passHref>
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                  rel="prev"
                >
                  início
                </LinkText>
              </NextLink>
              <Box
                sx={{
                  height: sobreNos ? "170px" : "0",
                  overflow: sobreNos ? "visible" : "hidden",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    sobreNos;
                    procedimentos && setProcedimentos(false);
                    clinica && setClinica(false);
                    setSobreNos(!sobreNos);
                  }}
                >
                  <SobreNos />
                </button>
              </Box>
              <Box
                sx={{
                  height: procedimentos ? "370px" : "0",
                  overflow: procedimentos ? "visible" : "hidden",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    clinica && setClinica(false);
                    sobreNos && setSobreNos(false);
                    setProcedimentos(!procedimentos);
                  }}
                >
                  <Procedimentos />
                </button>
              </Box>
              <Box
                sx={{
                  height: clinica ? "170px" : "0",
                  overflow: clinica ? "visible" : "hidden",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => {
                    procedimentos && setProcedimentos(false);
                    sobreNos && setSobreNos(false);
                    setClinica(!clinica);
                  }}
                >
                  <Clinica />
                </button>
              </Box>
              <NextLink href="/contato.html" passHref>
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                  rel="next"
                >
                  contato
                </LinkText>
              </NextLink>
              <NextLink href="/blog.html" passHref>
                <LinkText
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                  rel="next"
                >
                  blog
                </LinkText>
              </NextLink>
              <BoxIcons>
                <a
                  href="https://www.instagram.com/dricarosamuel/?hl=pt-br"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <img
                    src="/iconMenu/intagram.png"
                    alt="instagram"
                    title="instagram"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@dricarosamuel?lang=pt-BR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/iconMenu/tiktok.png"
                    alt="ticktok"
                    title="ticktok"
                  />
                </a>
                <a
                  href="https://www.facebook.com/dricarosamuel/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "0 10px" }}
                >
                  <img
                    src="/iconMenu/facebook.png"
                    alt="facebook"
                    title="facebook"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCWsp-p8Z33mjBAYqjXDoxZA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/iconMenu/youtube.png"
                    alt="youtube"
                    title="youtube"
                  />
                </a>
              </BoxIcons>
            </MenuItem>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Nav;
