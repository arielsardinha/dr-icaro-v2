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
          alt={"protese de silicone"}
          data-aos="fade-left"
          loading="lazy"
          title="protese de silicone"
        />
        <NextLink href="/procedimentos/r24r-fast-track-recovery">
          <a>prótese de silicone</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/lipo-hd-feminina.png"}
          alt={"lipo hd feminina"}
          data-aos="fade-up"
          loading="lazy"
          title="lipo hd feminina"
        />
        <NextLink href="/procedimentos/lipo-lad-hd">
          <a>lipo hd feminina</a>
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
        <NextLink href="/procedimentos/abdominoplastia">
          <a>abdominoplastia</a>
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
        <NextLink href="/procedimentos/mastopexia">
          <a>mastopexia</a>
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
        <NextLink href="/procedimentos/ninfoplastia">
          <a>ninfoplastia</a>
        </NextLink>
      </BoxImg>
      <BoxImg>
        <img
          src={"/lipo-hd-masculina.png"}
          alt={"lipo hd masculina"}
          data-aos="fade-right"
          loading="lazy"
          title="lipo hd masculina"
        />
        <NextLink href="/procedimentos/lipo-lad-hd">
          <a>lipo hd masculina</a>
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
