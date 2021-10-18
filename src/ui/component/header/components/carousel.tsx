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
      arrows: true,
    });
  }, [isMobile, isDesktop]);

  return (
    <Slider {...settings}>
      <BoxImg>
        <Image src="/local/01.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/02.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/03.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/04.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/05.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/06.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/07.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/08.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/09.jpeg" alt="" loading="lazy" />
      </BoxImg>
      <BoxImg>
        <Image src="/local/10.jpeg" alt="" loading="lazy" />
      </BoxImg>
    </Slider>
  );
};

export default Carousel;

const Image = styled("img")`
  width: 400px;
  height: 266px;
  border-radius: 20px;
  &:hover {
    filter: brightness(130%);
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 300px;
    height: 200px;
  }
`;

const BoxImg = styled("div")`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;
