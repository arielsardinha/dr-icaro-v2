import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Footer from "ui/component/footer/footer";
import { Section } from "../procedimentosGlobal.styled";
import DataProcedimentos from "./components/dataProcedimentos";

const Abdominoplastia = () => (
  <SectionImg>
    <Section>
      <h2 data-aos="fade-up">
        vamos juntos ao encontro <br />
        <span>da sua melhor versão</span>
      </h2>
      <h1 data-aos="fade-up">abdominoplastia</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Abdominoplastia;

const SectionImg = styled("div")`
  background-image: url("/procedimentos/abdominoplastia.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;