import useIsMobile from "data/hook/useIsMobile";
import { useState, useEffect } from "react";

import {
  BoxText,
  BoxProcedimentos,
  BoxInputs,
  InputTypeProcedimentos,
} from "ui/component/dataProcedimentos/dataProcedimentos.styled";
import { BoxIcons } from "ui/component/menu-nav/menuNav.styled";
import ProcedimentosText from "./procedimentos.text";
import Video from "./video";

const DataProcedimentos = () => {
  const isMobile = useIsMobile();
  const [selectedText, setSelectedText] = useState(
    "Prótese de Recuperação Rápida"
  );
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);

  return (
    <>
      <BoxProcedimentos data-aos="fade-up">
        <BoxInputs>
          <InputTypeProcedimentos
            sx={{ whiteSpace: "normal" }}
            isSelected={selectedText === "Prótese de Recuperação Rápida"}
            onClick={() => {
              setScroll(150);
              setSelectedText("Prótese de Recuperação Rápida");
            }}
          >
            Prótese de Recuperação Rápida 24h R24R
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Benefícios"}
            onClick={() => {
              setScroll(250);
              setSelectedText("Benefícios");
            }}
          >
            Benefícios
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Indicação"}
            onClick={() => {
              setScroll(400);
              setSelectedText("Indicação");
            }}
          >
            Indicação
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Procedimento"}
            onClick={() => {
              setScroll(650);
              setSelectedText("Procedimento");
            }}
          >
            Procedimento
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Preparo Necessário"}
            onClick={() => {
              setScroll(850);
              setSelectedText("Preparo Necessário");
            }}
          >
            Preparo Necessário
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Pós Operatório"}
            onClick={() => {
              setScroll(1000);
              setSelectedText("Pós Operatório");
            }}
          >
            Pós Operatório
          </InputTypeProcedimentos>
          <InputTypeProcedimentos
            isSelected={selectedText === "Sobre o Autor"}
            onClick={() => {
              setScroll(1300);
              setSelectedText("Sobre o Autor");
            }}
          >
            Sobre o Autor
          </InputTypeProcedimentos>
        </BoxInputs>
        <BoxText>
          <ProcedimentosText text={selectedText} />
          <div style={{ display: isMobile ? "none" : "block" }}>
            <BoxIcons>
              <a
                href="https://www.instagram.com/dricarosamuel/?hl=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/iconMenu/intagram.png"
                  alt="instagram"
                  title="instagram"
                />
              </a>
              <a
                href="https://www.tiktok.com/@dricarosamuel?lang=pt-BR"
                target="_blank"
                rel="noreferrer"
                style={{ margin: "0 10px" }}
              >
                <img src="/iconMenu/tiktok.png" alt="ticktok" title="ticktok" />
              </a>
              <a
                href="https://www.facebook.com/dricarosamuel/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/iconMenu/facebook.png"
                  alt="facebook"
                  title="facebook"
                />
              </a>
            </BoxIcons>
            <Video />
          </div>
        </BoxText>
      </BoxProcedimentos>
      <div
        style={{
          width: "100%",
          display: isMobile ? "block" : "none",
        }}
      >
        <Video />
      </div>
    </>
  );
};

export default DataProcedimentos;
