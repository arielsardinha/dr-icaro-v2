import { Box, Container as MuiContainer } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const MaisContaudo = () => (
  <Container>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "620px",
      }}
    >
      <Text>Quer mais conteúdo sobre Cirurgia Plástica ?</Text>
      <BoxImage>
        <a
          href="https://www.instagram.com/dricarosamuel/?hl=pt-br"
          target="_blank"
          rel="noreferrer"
        >
          <img
            loading="lazy"
            src="/instagram.png"
            alt="instagram dr. ícaro samel"
          />
        </a>
        <a
          href="https://www.tiktok.com/@dricarosamuel?lang=pt-BR"
          target="_blank"
          rel="noreferrer"
        >
          <img
            loading="lazy"
            src="/ticktok.png"
            alt="ticktok dr. ícaro samel"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCWsp-p8Z33mjBAYqjXDoxZA"
          target="_blank"
          rel="noreferrer"
        >
          <img
            loading="lazy"
            src="/icons/youtube.png"
            alt="youtube dr. ícaro samel"
          />
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLh304Sy7hwhFRpIu015gKH9sK_09vja8C"
          target="_blank"
          rel="noreferrer"
        >
          <img
            loading="lazy"
            src="/podcast.png"
            alt="podcast dr. ícaro samel"
          />
        </a>
      </BoxImage>
    </Box>
  </Container>
);

export default MaisContaudo;

const Container = styled(MuiContainer)`
  display: flex;
  justify-content: center;
`;

const Text = styled("h2")`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.5em;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const BoxImage = styled("figure")`
  display: flex;
  width: 100%;
  justify-content: center;
  img {
    padding: ${({ theme }) => theme.spacing(0, 2)};
    width: 120%;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    flex-wrap: wrap;
    align-items: center;
    img {
      padding: ${({ theme }) => theme.spacing(2)};
    }
  }
`;
