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
  const [selectedText, setSelectedText] = useState(
    "Prótese de Recuperação Rápida"
  );
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
          isSelected={selectedText === "Prótese de Recuperação Rápida"}
          onClick={() => {
            setScroll(200);
            setSelectedText("Prótese de Recuperação Rápida");
          }}
        >
          Prótese de Recuperação Rápida 24h R24R
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Benefícios"}
          onClick={() => {
            setScroll(300);
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
            setScroll(700);
            setSelectedText("Procedimento");
          }}
        >
          Procedimento
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Preparo Necessário"}
          onClick={() => {
            setScroll(900);
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
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;
