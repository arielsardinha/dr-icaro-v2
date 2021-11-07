import { useEffect, useRef, useState } from "react";
import { Video, ContainerVideo } from "../clinica.styled";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import useIsMobile, { useIsXdesktop } from "data/hook/useIsMobile";

const Videos = () => {
  const [videos, setVideo] = useState([0, 1, 2, 3]),
    [positionVideo, setPositionVideo] = useState(0),
    isMobile = useIsMobile(),
    isDesktop = useIsXdesktop();

  return (
    <ContainerVideo>
      <button
        onClick={() => {
          setPositionVideo(
            videos.length - 1 === positionVideo
              ? positionVideo
              : positionVideo + 1
          );
        }}
      >
        <ArrowLeft />
      </button>
      <Video
        style={{
          width: `${
            videos[0] === positionVideo ? (isMobile ? "80%" : "100%") : "0"
          }`,
          position: `${videos[0] === positionVideo ? "relative" : "absolute"}`,
        }}
        muted={true}
        autoPlay
        controls={true}
        preload="auto"
      >
        <source src="/video/video1.mp4" type="video/mp4" />
      </Video>
      <Video
        style={{
          width: `${
            videos[1] === positionVideo ? (isMobile ? "80%" : "100%") : "0"
          }`,
          position: `${videos[1] === positionVideo ? "relative" : "absolute"}`,
        }}
        controls={true}
        preload="metadata"
      >
        <source src="/video/video2.mp4" type="video/mp4" />
      </Video>
      <Video
        style={{
          width: `${
            videos[2] === positionVideo ? (isMobile ? "80%" : "100%") : "0"
          }`,
          position: `${videos[2] === positionVideo ? "relative" : "absolute"}`,
        }}
        controls={true}
        preload="metadata"
      >
        <source src="/video/video3.mp4" type="video/mp4" />
      </Video>
      <Video
        style={{
          width: `${
            videos[3] === positionVideo ? (isMobile ? "80%" : "100%") : "0"
          }`,
          position: `${videos[3] === positionVideo ? "relative" : "absolute"}`,
        }}
        controls={true}
        preload="metadata"
      >
        <source src="/video/video4.mp4" type="video/mp4" />
      </Video>
      <button
        onClick={() => {
          setPositionVideo(
            0 === positionVideo ? positionVideo : positionVideo - 1
          );
        }}
      >
        <ArrowRight />
      </button>
    </ContainerVideo>
  );
};

export default Videos;
