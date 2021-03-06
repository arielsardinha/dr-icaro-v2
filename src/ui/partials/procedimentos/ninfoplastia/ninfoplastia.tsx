import { Section } from "../procedimentosGlobal.styled";
import Footer from "ui/component/footer/footer";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import DataProcedimentos from "./components/dataProcedimentos";

const Ninfoplastia = () => (
  <SectionImg>
    <Section>
      <h1 data-aos="fade-up">ninfoplastia</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Ninfoplastia;

const SectionImg = styled("section")`
  background-image: url("/procedimentos/ninfoplastia.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
`;
