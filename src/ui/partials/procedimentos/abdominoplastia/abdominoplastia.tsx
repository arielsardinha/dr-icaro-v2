import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Footer from "ui/component/footer/footer";
import { Section } from "../procedimentosGlobal.styled";
import DataProcedimentos from "./components/dataProcedimentos";

const Abdominoplastia = () => (
  <SectionImg>
    <Section>
      <h1 data-aos="fade-up">abdominoplastia</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Abdominoplastia;

const SectionImg = styled("section")`
  background-image: url("/procedimentos/abdominoplastia.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
