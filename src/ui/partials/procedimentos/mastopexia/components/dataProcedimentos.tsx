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
  const [selectedText, setSelectedText] = useState("Mastopexia");

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    window.scrollTo(0, scroll);
  }, [scroll, isMobile]);
  return (
    <BoxProcedimentos data-aos="fade-up">
      <BoxInputs>
        <InputTypeProcedimentos
          isSelected={selectedText === "Mastopexia"}
          onClick={() => {
            setScroll(150);
            setSelectedText("Mastopexia");
          }}
        >
          Mastopexia
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "O que é aMastopexia"}
          onClick={() => {
            setScroll(200);
            setSelectedText("O que é aMastopexia");
          }}
        >
          O que é a Mastopexia
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Indicação"}
          onClick={() => {
            setScroll(500);
            setSelectedText("Indicação");
          }}
        >
          Indicação
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Preparo Necessário"}
          onClick={() => {
            setScroll(700);
            setSelectedText("Preparo Necessário");
          }}
        >
          Preparo Necessário
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Procedimentos"}
          onClick={() => {
            setScroll(1000);
            setSelectedText("Procedimentos");
          }}
        >
          Procedimentos
        </InputTypeProcedimentos>
        <InputTypeProcedimentos
          isSelected={selectedText === "Reabilitação"}
          onClick={() => {
            setScroll(1400);
            setSelectedText("Reabilitação");
          }}
        >
          Reabilitação
        </InputTypeProcedimentos>
      </BoxInputs>
      <BoxText>
        <ProcedimentosText text={selectedText} />
      </BoxText>
    </BoxProcedimentos>
  );
};

export default DataProcedimentos;
