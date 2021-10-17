import useIsMobile from "data/hook/useIsMobile";
import { useState, useEffect } from "react";
import {
  BoxText,
  BoxProcedimentos,
  BoxInputs,
  InputTypeProcedimentos,
} from "ui/component/dataProcedimentos/dataProcedimentos.styled";
import ProcedimentosText from "./procedimentos.text";

const DataProcedimentos = () => {
  const isMobile = useIsMobile();
  const [selectedText, setSelectedText] = useState("lipoaspiração");

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);
  return (
    <BoxProcedimentos data-aos="fade-up">
      <BoxInputs>
        <InputTypeProcedimentos
          isSelected={selectedText === "lipoaspiração"}
          onClick={() => {
            setScroll(300);
            setSelectedText("lipoaspiração");
          }}
        >
          lipoaspiração
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "o que é a lipo lad"}
          onClick={() => {
            setScroll(500);
            setSelectedText("o que é a lipo lad");
          }}
        >
          o que é a lipo lad
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "benefícios"}
          onClick={() => {
            setScroll(900);
            setSelectedText("benefícios");
          }}
        >
          benefícios
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "indicação"}
          onClick={() => {
            setScroll(1000);
            setSelectedText("indicação");
          }}
        >
          indicação
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "procedimento"}
          onClick={() => {
            setScroll(1300);
            setSelectedText("procedimento");
          }}
        >
          procedimento
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "pré e pós operatório"}
          onClick={() => {
            setScroll(1500);
            setSelectedText("pré e pós operatório");
          }}
        >
          pré e pós operatório
        </InputTypeProcedimentos>
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;