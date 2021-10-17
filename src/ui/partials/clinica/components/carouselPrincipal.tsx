import { useEffect, useState } from "react";
import { styled } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile, { useIsXdesktop } from "data/hook/useIsMobile";

const Carousel = () => {
  const isMobile = useIsMobile();
  const isDesktop = useIsXdesktop();
  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });

  useEffect(() => {
    setSetting({
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: isMobile ? 1 : isDesktop ? 3 : 2,
      slidesToScroll: isMobile ? 1 : isDesktop ? 3 : 2,
      arrows: !isMobile,
    });
  }, [isMobile, isDesktop]);

  return (
    <BoxPrincipal>
      <Slider {...settings}>
        <BoxImg>
          <Image src="/clinica/01.png" alt="" loading="lazy" />
        </BoxImg>
        <BoxImg>
          <Image src="/clinica/02.png" alt="" loading="lazy" />
        </BoxImg>
        <BoxImg>
          <Image src="/clinica/03.png" alt="" loading="lazy" />
        </BoxImg>
      </Slider>
    </BoxPrincipal>
  );
};

export default Carousel;

export const CarouselSegundo = () => {
  const isMobile = useIsMobile();
  const isDesktop = useIsXdesktop();
  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });

  useEffect(() => {
    setSetting({
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: isMobile ? 1 : isDesktop ? 3 : 2,
      slidesToScroll: isMobile ? 1 : isDesktop ? 3 : 2,
      arrows: !isMobile,
    });
  }, [isMobile, isDesktop]);

  return (
    <BoxPrincipal>
      <Slider {...settings}>
        <BoxImg>
          <Image src="/clinica/04.png" alt="" loading="lazy" />
        </BoxImg>
        <BoxImg>
          <Image src="/clinica/05.png" alt="" loading="lazy" />
        </BoxImg>
        <BoxImg>
          <Image src="/clinica/06.png" alt="" loading="lazy" />
        </BoxImg>
      </Slider>
    </BoxPrincipal>
  );
};

const Image = styled("img")`
  width: 400px;
  height: 266px;
  border-radius: 20px;
  &:hover {
    filter: brightness(120%);
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 300px;
  }
`;

const BoxImg = styled("div")`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

const Video = styled("video")`
  height: 400px;
  width: 100%;
  background-color: #000;
`;

const BoxPrincipal = styled("div")`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(10, 0)};
`;
