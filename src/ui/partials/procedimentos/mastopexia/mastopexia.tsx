import { styled } from "@material-ui/system";
import { Section } from "../procedimentosGlobal.styled";
import ProcedimentosText from "./components/dataProcedimentos";
import Footer from "ui/component/footer/footer";
import { Box } from "@material-ui/core";

const Mastopexia = () => (
  <SectionImg id="mastopexia">
    <Section>
      <h2 data-aos="fade-up">
        vamos juntos ao encontro <br />
        <span> da sua melhor versão </span>
      </h2>
      <h1 data-aos="fade-up">mastopexia</h1>
      <ProcedimentosText />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Mastopexia;

const SectionImg = styled("section")`
  background-image: url("/procedimentos/mastopexia.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
