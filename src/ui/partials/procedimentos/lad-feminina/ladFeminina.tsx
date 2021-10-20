import { styled } from "@material-ui/system";
import DataProcedimentos from "./components/dataProcedimentos";
import { Section } from "../procedimentosGlobal.styled";
import Footer from "ui/component/footer/footer";
import { Box } from "@material-ui/core";

const LadFeminina = () => (
  <SectionImg id="ladFeminina">
    <Section>
      <h1 data-aos="fade-up">Lipo LAD (HD)</h1>
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
