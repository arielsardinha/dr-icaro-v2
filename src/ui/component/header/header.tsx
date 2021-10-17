import { Container as MuiContainer, Box } from "@material-ui/core";
import { BoxHeader, Title, Logo, Container } from "./header.styled";
import Procedmentos from "./components/procedimentos";
import DrIcaro from "./components/drIcaro";
import MaisContaudo from "./components/conteudo";
import Footer from "ui/component/footer/footer";
import Carousel from "./components/carousel";
import HeaderInit from "../header-init/headerInit";

const Header = () => {
  return (
    <BoxHeader>
      <HeaderInit />
      <Container>
        <Logo data-aos="fade-up" src={"logo.png"} alt={"icaro samuel"} />
        <Box data-aos="fade-up" sx={{ mt: 20 }}>
          <Title>Dream Sculptor</Title>
          <p>A arte de esculpir seu sonho</p>
        </Box>
      </Container>
      <MuiContainer>
        <Procedmentos />
        <DrIcaro />
        <Box sx={{ my: 10 }}>
          <Carousel />
        </Box>
        <Box sx={{ mb: 5 }}>
          <MaisContaudo />
        </Box>

        <Box sx={{ position: "relative" }}>
          <Footer />
        </Box>
      </MuiContainer>
    </BoxHeader>
  );
};

export default Header;
