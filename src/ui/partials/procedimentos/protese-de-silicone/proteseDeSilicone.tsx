import { styled } from "@material-ui/system";
import Footer from "ui/component/footer/footer";
import { Section } from "../procedimentosGlobal.styled";
import DataProcedimentos from "./components/dataProcedimentos";
import { Box } from "@material-ui/core";

const ProteseDeSilicone = () => (
  <SectionImg id="proteseDeSilicone">
    <Section>
      <h2 data-aos="fade-up">
        vamos juntos ao encontro <br />
        <span>da sua melhor versão</span>
      </h2>
      <h1 data-aos="fade-up">prótese de silicone</h1>
      <DataProcedimentos />
    </Section>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </SectionImg>
);

export default ProteseDeSilicone;

const SectionImg = styled("div")`
  background-image: url("procedimentos/protese-de-mama.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
