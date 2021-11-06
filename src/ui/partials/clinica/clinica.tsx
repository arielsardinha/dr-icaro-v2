import {
  Section,
  InputAgendar,
  Logo,
  BoxTexts,
  Container,
  Video,
} from "./clinica.styled";
import Carousel, { CarouselSegundo } from "./components/carouselPrincipal";

const Clinica = () => (
  <>
    <Section id="clinica">
      <Logo
        src="/clinica/Logo-dream-day.png"
        alt="dream day"
        title="dream day"
      />
      <h2 style={{ textAlign: "center" }}>você merece o melhor!</h2>
      <Video autoPlay muted={true} controls={true} >
        <source src="/video/video1.mp4" type="video/mp4" />
      </Video>
      <Container>
        <Carousel />
      </Container>
      <Container>
        <BoxTexts>
          <h1>
            SUA CONSULTA COM <span>DR. ÍCARO SAMUEL.</span>
          </h1>
          <p>
            Eu e minha equipe queremos que você sinta a melhor experiência
            durante o planejamento do seu sonho!
          </p>
          <p>
            Todos a sua disposição para lhe atender, com muito zelo, carinho,
            atenção e dedicação.
          </p>
          <p>
            Durante seu Dream Day, você também irá passar pela experiência do
            Crisalix - Tecnologia 4D onde é possível simular o resultado da sua
            cirurgia plástica.
          </p>
          <p>
            Você verá, através de um óculos de realidade virtual, a sua
            transformação!
          </p>
        </BoxTexts>
      </Container>
      <Container>
        <CarouselSegundo />
      </Container>
      <InputAgendar size={"large"} variant={"contained"}>
        <a
          href="https://dricarosamuel.com.br/pre-agendamento/"
          target="_blank"
          rel="noreferrer"
        >
          agendar minha experiência
        </a>
      </InputAgendar>
    </Section>
  </>
);

export default Clinica;
