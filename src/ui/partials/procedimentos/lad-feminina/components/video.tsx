import { styled } from "@material-ui/core/styles";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { useState } from "react";
import { BoxImages } from "ui/component/header/header.styled";

const Video = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <BoxArrows>
        <button
          onClick={() => setOpen(!open)}
          style={{ display: open ? "none" : "block" }}
        >
          <ArrowDropDown />
        </button>
        <button
          onClick={() => setOpen(!open)}
          style={{ display: open ? "block" : "none" }}
        >
          <ArrowDropUp />
        </button>
      </BoxArrows> */}
      <Title>Dr. Ícaro explica detalhes sobre a Lipo HD</Title>
      <Iframe
        src="https://www.youtube.com/embed/KNK3CsSLQUM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
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
    </>
  );
};

export default Video;

const Iframe = styled("iframe")`
  position: relative;
  height: 75vh;
  z-index: 1;
  width: 100%;
  transition: 1s;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;

const Title = styled("h1")`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 300;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 0.8em;
  }
`;

const BoxArrows = styled("div")`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(2, 0)};

  [data-testid] {
    color: #fff;
  }
  [data-testid]:hover {
    cursor: pointer;
    transition: 0.5s;
    background: ${({ theme }) => theme.palette.text.secondary};
    color: #000;
    border-radius: 50%;
  }
  [data-testid="ArrowDropDownIcon"] {
    animation: addowDown 2s infinite;
  }
  [data-testid="ArrowDropUpIcon"] {
    animation: addowUp 2s infinite;
  }
  button {
    border: none;
    background: none;
  }
`;
