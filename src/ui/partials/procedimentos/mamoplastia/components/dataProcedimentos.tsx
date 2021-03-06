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
  const [selectedText, setSelectedText] = useState("mamoplastia");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);
  return (
    <BoxProcedimentos data-aos="fade-up">
      <BoxInputs>
        <InputTypeProcedimentos
          isSelected={selectedText === "mamoplastia"}
          onClick={() => {
            setScroll(150);
            setSelectedText("mamoplastia");
          }}
        >
          mamoplastia
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          sx={{ whiteSpace: "normal" }}
          isSelected={selectedText === "O que é aMamoplastia de Aumento"}
          onClick={() => {
            setScroll(300);
            setSelectedText("O que é aMamoplastia de Aumento");
          }}
        >
          O que é a Mamoplastia de Aumento
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Indicação"}
          onClick={() => {
            setScroll(450);
            setSelectedText("Indicação");
          }}
        >
          Indicação
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Preparo Necessário"}
          onClick={() => {
            setScroll(600);
            setSelectedText("Preparo Necessário");
          }}
        >
          Preparo Necessário
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "procedimento"}
          onClick={() => {
            setScroll(800);
            setSelectedText("procedimento");
          }}
        >
          procedimento
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Pós Operatório"}
          onClick={() => {
            setScroll(900);
            setSelectedText("Pós Operatório");
          }}
        >
          Pós Operatório
        </InputTypeProcedimentos>
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;
