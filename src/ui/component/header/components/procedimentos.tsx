import { styled } from "@material-ui/core/styles";
import NextLink from "next/link";

const Procedmentos = () => (
  <BoxSection>
    <h3 data-aos="fade-up">
      vamos juntos ao encontro <br /> <span>da sua melhor versão</span>
    </h3>
    <BoxImgs>
      <BoxImg>
        <img
          src={"/protese-de-silicone.png"}
          alt={"Prótese de Silicone Recuperação em 24 horas"}
          data-aos="fade-left"
          loading="lazy"
          title="Prótese de Silicone Recuperação em 24 horas"
        />
        <NextLink href="/procedimentos/r24r-fast-track-recovery" passHref>
          <a rel="next">Prótese de Silicone Recuperação em 24 horas</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/lipo-hd-feminina.png"}
          alt={"Lipo HD (Lipo LAD)"}
          data-aos="fade-up"
          loading="lazy"
          title="Lipo HD (Lipo LAD)"
        />
        <NextLink href="/procedimentos/lipo-lad-hd" passHref>
          <a rel="next">Lipo HD (Lipo LAD)</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/abdominoplastia.png"}
          alt={"abdominoplastia"}
          data-aos="fade-right"
          loading="lazy"
          title="abdominoplastia"
        />
        <NextLink href="/procedimentos/abdominoplastia" passHref>
          <a rel="next">abdominoplastia</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/mastopexia.png"}
          alt={"mastopexia"}
          data-aos="fade-left"
          loading="lazy"
          title="mastopexia"
        />
        <NextLink href="/procedimentos/mastopexia" passHref>
          <a rel="next">mastopexia</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/ninfoplastia.png"}
          alt={"ninfoplastia"}
          data-aos="fade-up"
          loading="lazy"
          title="ninfoplastia"
        />
        <NextLink href="/procedimentos/ninfoplastia" passHref>
          <a rel="next">ninfoplastia</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/mamoplastia.png"}
          alt={"Mamoplastia"}
          data-aos="fade-right"
          loading="lazy"
          title="Mamoplastia"
        />
        <NextLink
          href="/procedimentos/mamoplastia-entenda-como-e-realizado-o-implante"
          passHref
        >
          <a rel="next">Mamoplastia</a>
        </NextLink>
      </BoxImg>
    </BoxImgs>
  </BoxSection>
);

export default Procedmentos;

const BoxSection = styled("section")`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 100;
    letter-spacing: 2px;
    span {
      font-weight: bold;
    }
  }
`;

const BoxImgs = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 210px);
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, 210px);
  }
`;

const BoxImg = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)};
  a:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  a {
    position: absolute;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.text.primary};
    text-transform: uppercase;
  }
  img {
    width: 200px;
    height: 133px;
    border-radius: 10px;
  }
`;
