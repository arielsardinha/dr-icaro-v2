import { Section, BoxData } from "./galeria.styled";
import Carousel from "./components/carousel";
import { Box, Container } from "@material-ui/core";

const Galeria = () => (
  <Section id="galeria">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        pt: 6,
      }}
    >
      <BoxData>
        <h4>CLÍNICA DR. ÍCARO SAMUEL</h4>
        <h1>Missão</h1>
        <p>transformar vidas empoderando mentes e corpos</p>
      </BoxData>
    </Box>
    <Container>
      <Carousel />
    </Container>
    <video autoPlay loop className="bg_video">
      <source src="video/backVideo.mp4" type="video/mp4" />
    </video>
  </Section>
);

export default Galeria;
