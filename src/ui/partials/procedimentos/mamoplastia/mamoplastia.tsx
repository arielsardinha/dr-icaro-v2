import { Section } from "../procedimentosGlobal.styled";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import ProcedimentosText from "./components/dataProcedimentos";
import Footer from "ui/component/footer/footer";

const Mamoplastia = () => (
  <SectionImg>
    <Section>
      <h1 data-aos="fade-up">mamoplastia</h1>
      <ProcedimentosText />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Mamoplastia;

const SectionImg = styled("section")`
  background-image: url("/procedimentos/mamoplastia.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
