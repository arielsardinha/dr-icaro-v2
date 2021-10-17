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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
    <Slider {...settings}>
      <BoxImg>
        <Image src="/galeria/01.png" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/02.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/03.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/04.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/05.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/06.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/07.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/08.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/09.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/10.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/11.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/12.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/13.jpg" alt="" />
      </BoxImg>
      <BoxImg>
        <Image src="/galeria/14.jpg" alt="" />
      </BoxImg>
    </Slider>
  );
};

export default Carousel;

const Image = styled("img")`
  width: 400px;
  border-radius: 20px;
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 300px;
  }
`;

const BoxImg = styled("div")`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;
