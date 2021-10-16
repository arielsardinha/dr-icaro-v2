import { DrIcaroImg, BoxTextoIcaro, BoxImages } from "../header.styled";
import { styled } from "@material-ui/core/styles";

const DrIcaro = () => (
  <Box>
    <DrIcaroImg
      src={"dr-icaro.png"}
      alt={"Dr.Ícaro Samuel"}
      data-aos="fade-up"
    />
    <BoxTextoIcaro data-aos="fade-up">
      <p>
        Médico entusiasta em sua área de atuação por unir conceitos técnicos
        atuais e inovadores, acreditando que o senso de naturalidade é a mais
        bela expressão do ser humano e de sua identidade.
      </p>
      <p>
        Através da cirurgia plástica busca encontrar harmonia entre o corpo e a
        mente, valorizando a mudança no estilo de vida, resultando na melhor
        performance das pessoas e impactando-as.
      </p>
      <p>
        Membro da SBCP (Sociedade Brasileira de Cirurgia Plástica) e da ASPS
        (Sociedade Americana de Cirugia Plástica).
      </p>
      <p>Realizou residência médica em cirurgia plástica no HSE/RJ.</p>
      <p>
        Faz parte de um seleto grupo de cirurgiões credenciados na técnica de
        Lipo HD (Total Definer) no Brasil.
      </p>
      <p>
        Busca sempre através de um tratamento amplo de corpo e mente impactar
        vidas e cuidar de pessoas!
      </p>
      <BoxImages>
        <a
          href="http://www2.cirurgiaplastica.org.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="icons/cirurgia-plastica.png"
            alt="cirurgia-plastica"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.plasticsurgery.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="icons/american-society.png"
            alt="american society"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.totaldefinerbrasil.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="icons/total-define.png" alt="total define" loading="lazy" />
        </a>
        <img src="icons/rr.png" alt="r24r" loading="lazy" />
      </BoxImages>
    </BoxTextoIcaro>
  </Box>
);

export default DrIcaro;

const Box = styled("section")`
  display: flex;
  margin: ${({ theme }) => theme.spacing(5, 0)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
