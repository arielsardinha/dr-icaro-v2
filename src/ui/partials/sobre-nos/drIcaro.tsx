import { Container, Box } from "@material-ui/core";
import {
  ContainerDrIcaro,
  BoxImages,
  BoxTexts,
  ConhecaDrIcaro,
} from "./sobreNos.styled";
import Footer from "ui/component/footer/footer";

export const DrIcaro = () => (
  <ContainerDrIcaro>
    <video muted={true} controls={false} autoPlay loop className="bg_video">
      <source src="/video/backVideo.mp4" type="video/mp4" />
    </video>
    <ConhecaDrIcaro>
      <h1>Conheça Dr. Ícaro</h1>
    </ConhecaDrIcaro>
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        py: 20,
      }}
    >
      <BoxTexts>
        <h1>Dr. Ícaro Samuel</h1>
        <p>
          Olá sou Ícaro Samuel, Cirurgião Plástico, apaixonado e eterno discente
          sobre avanços tecnológicos e novas técnicas, principalmente no que
          tange a Lipo LAD (HD). Minha paixão iniciou quando fiz o curso com o
          Criador/Mestre da técnica Total Definer, Alfredo Hoyos, uma referência
          mundial dentro do campo da Cirurgia Plástica. Pois, mais que realizar
          a lipoaspiração de gordura, a técnica Total Definer esculpe corpos,
          modelando conforme a musculatura do paciente, realçando seus contornos
          e promovendo um corpo atlético e belo!
        </p>
        <p>
          Aliado a técnica inovadora, busquei em feiras e congressos de
          medicina, tecnologias que pudessem otimizar a qualidade do resultado,
          e surpreendentemente encontrei o Jato de Plasma e a Tecnologia
          Ultrassônica, duas tecnologias que possibilitam um resultado ainda
          mais espetacular, por promover a “colagem da pele no músculo e
          diminuir a flacidez dos locais lipados. Outro grande trunfo de nosso
          sucesso é a alta performance dos resultados cirúrgicos através de uma
          equipe de profissionais altamente qualificadas para o pós-cirúrgico e
          acompanhamento dos primeiros dias em Homecare, para quem mora em
          Palmas, e no Hotel para quem vier operar de outra cidade.
        </p>
        <p >Dream Sculptor</p>
        <p>Embaixador Total Definer Brasil</p>
        <BoxImages>
          <a
            href="http://www2.cirurgiaplastica.org.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/cirurgia-plastica.png"
              alt="cirurgia plastica"
              loading="lazy"
              title="cirurgia plastica"
            />
          </a>
          <a
            href="https://www.plasticsurgery.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/american-society.png"
              alt="american society"
              loading="lazy"
              title="american society"
            />
          </a>
          <a
            href="https://www.totaldefinerbrasil.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/total-define.png"
              alt="total define"
              loading="lazy"
              title="total define"
            />
          </a>
          <a>
            <img src="/icons/rr.png" alt="R24R" loading="lazy" title="R24R" />
          </a>
        </BoxImages>
      </BoxTexts>
    </Container>
    <Box sx={{ position: "relative" }}>
      <Footer />
    </Box>
  </ContainerDrIcaro>
);
