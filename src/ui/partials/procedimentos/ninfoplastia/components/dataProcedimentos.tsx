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
  const [selectedText, setSelectedText] = useState("Ninfoplastia");

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);

  return (
    <BoxProcedimentos data-aos="fade-up">
      <BoxInputs>
        <InputTypeProcedimentos
          isSelected={selectedText === "Ninfoplastia"}
          onClick={() => {
            setScroll(300);
            setSelectedText("Ninfoplastia");
          }}
        >
          Ninfoplastia
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Indicações"}
          onClick={() => {
            setScroll(400);
            setSelectedText("Indicações");
          }}
        >
          Indicações
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Contraindicações"}
          onClick={() => {
            setScroll(600);
            setSelectedText("Contraindicações");
          }}
        >
          Contraindicações
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Pré-operatório"}
          onClick={() => {
            setScroll(800);
            setSelectedText("Pré-operatório");
          }}
        >
          Pré-operatório
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Pós-operatório"}
          onClick={() => {
            setScroll(900);
            setSelectedText("Pós-operatório");
          }}
        >
          Pós-operatório
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Como é feita"}
          onClick={() => {
            setScroll(1200);
            setSelectedText("Como é feita");
          }}
        >
          Como é feita
        </InputTypeProcedimentos>
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;
