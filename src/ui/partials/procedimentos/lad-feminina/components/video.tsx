import { styled } from "@material-ui/core/styles";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { useState } from "react";

const Video = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BoxArrows>
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
      </BoxArrows>
      <Iframe
        src="https://www.youtube.com/embed/KNK3CsSLQUM"
        title="YouTube video player"
        frameBorder="0"
        style={{ height: open ? "75vh" : "0" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </>
  );
};

export default Video;

const Iframe = styled("iframe")`
  position: relative;
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
