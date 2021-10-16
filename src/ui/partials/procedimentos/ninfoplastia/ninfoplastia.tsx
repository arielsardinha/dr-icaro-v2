import { Section } from "../procedimentosGlobal.styled";
import Footer from "ui/component/footer/footer";
import { styled } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import DataProcedimentos from "./components/dataProcedimentos";

const Ninfoplastia = () => (
  <SectionImg>
    <Section>
      <h2 data-aos="fade-up">
        vamos juntos ao encontro <br />
        <span>da sua melhor versão</span>
      </h2>
      <h1 data-aos="fade-up">ninfoplastia</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default Ninfoplastia;

const SectionImg = styled("div")`
  background-image: url("procedimentos/ninfoplastia.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
`;
