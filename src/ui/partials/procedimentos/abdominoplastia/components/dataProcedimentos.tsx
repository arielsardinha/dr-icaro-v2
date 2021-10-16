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
  const [selectedText, setSelectedText] = useState("O que é abdominoplastia");

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);
  return (
    <BoxProcedimentos data-aos="fade-up">
      <BoxInputs>
        <InputTypeProcedimentos
          sx={{ whiteSpace: "normal" }}
          isSelected={selectedText === "O que é abdominoplastia"}
          onClick={() => {
            setScroll(300);
            setSelectedText("O que é abdominoplastia");
          }}
        >
          O que é abdominoplastia
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Como funciona"}
          onClick={() => {
            setScroll(500);
            setSelectedText("Como funciona");
          }}
        >
          Como funciona
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Pré-operatório"}
          onClick={() => {
            setScroll(1100);
            setSelectedText("Pré-operatório");
          }}
        >
          Pré-operatório
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Recuperação"}
          onClick={() => {
            setScroll(1300);
            setSelectedText("Recuperação");
          }}
        >
          Recuperação
        </InputTypeProcedimentos>
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;
