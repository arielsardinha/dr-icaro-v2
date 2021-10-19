import { Section, BoxData, BoxSecFrame } from "./contato.styled";
import { Button, Box } from "@material-ui/core";
import Footer from "ui/component/footer/footer";

const Contato = () => (
  <>
    <Section>
      <BoxSecFrame>
        <BoxData>
          <h2>CONTATO</h2>
          <span>+55 63 3216 4091</span>
          <span>+55 63 99947 2754</span>
        </BoxData>

        <BoxData>
          <h2>ATENDIMENTO</h2>
          <span>SEGUNDA-FEIRA 08:00–18:00 </span>
          <span>TERÇA-FEIRA 08:00–18:00</span>
          <span>QUARTA-FEIRA 08:00–18:00 </span>
          <span> QUINTA-FEIRA 08:00–18:00 </span>
          <span> SEXTA-FEIRA 08:00–18:00 </span>
          <span>SÁBADO 08:00 –12:00 </span>
          <span>DOMINGO FECHADO </span>
        </BoxData>
      </BoxSecFrame>
      <Button
        sx={{ borderRadius: "30px" }}
        size={"large"}
        variant={"contained"}
      >
        <a
          href="https://dricarosamuel.com.br/pre-agendamento/"
          target="_blank"
          rel="noreferrer"
        >
          AGENDAR CONSULTA
        </a>
      </Button>
    </Section>
    <Box sx={{ my: 2 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.669281862899!2d-48.33104155011639!3d-10.207489192673304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b34b9dea7957d%3A0xa6b1bd00d3f7a4f!2sDr.%20%C3%8Dcaro%20Samuel%20-%20Cirurgia%20Pl%C3%A1stica!5e0!3m2!1spt-BR!2sbr!4v1633806263856!5m2!1spt-BR!2sbr"
        loading="lazy"
        allowFullScreen={false}
        style={{ border: "none", width: "100%" }}
      ></iframe>
    </Box>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
    <video muted={true} autoPlay loop className="bg_video">
      <source src="/video/backVideo.mp4" type="video/mp4" />
    </video>
  </>
);

export default Contato;
