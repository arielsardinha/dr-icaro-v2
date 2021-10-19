import { styled } from "@material-ui/system";
import DataProcedimentos from "./components/dataProcedimentos";
import { Section } from "../procedimentosGlobal.styled";
import Footer from "ui/component/footer/footer";
import { Box } from "@material-ui/core";

const LadFeminina = () => (
  <SectionImg id="ladFeminina">
    <Section>
      <h2 data-aos="fade-up">
        vamos juntos ao encontro <br />
        <span>da sua melhor versão</span>
      </h2>
      <h1 data-aos="fade-up">lipo lad</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default LadFeminina;

const SectionImg = styled("section")`
  background-image: url("/procedimentos/lad-feminina.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
