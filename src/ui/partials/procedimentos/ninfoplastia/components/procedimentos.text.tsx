import useIsMobile from "data/hook/useIsMobile";
import { BoxTextSelect } from "ui/component/dataProcedimentos/dataProcedimentos.styled";

const ProcedimentosText = ({ text }) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <ProcedimentosMobile text={text} />
  ) : (
    <ProcedimentosDesktop text={text} />
  );
};

const ProcedimentosDesktop = ({ text }) => {
  return (
    <>
      <BoxTextSelect isSelect={text === "Ninfoplastia"}>
        <h1>Ninfoplastia</h1>
        <p>
          A cada dia que passa mais pessoas buscam elevar sua autoestima,
          corrigindo defeitos que as incomodam esteticamente. Isso tudo tem
          relação com a felicidade, qualidade de vida e o bem-estar. As
          cirurgias plásticas vêm proporcionando essas mudanças, além dos
          procedimentos mais conhecidos como as plásticas nos seios, nariz,
          lipoaspiração, a <span>Ninfoplastia</span> vem sendo muito requisitada
          pelas mulheres para fazer reduções ou alterações dos pequenos lábios
          vaginais.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Indicações"}>
        <h1>Indicações</h1>
        <p>
          Na maioria dos casos, as mulheres que optam pela cirurgia plástica são
          devido a estética, que causa incômodo e afeta a autoestima,
          principalmente durante as relações sexuais.
        </p>
        <p>
          Outras buscam a cirurgia plástica de ninfoplastia por questões mais
          funcionais. Muitas mulheres sofrem dor por conta do tamanho dos
          lábios.
        </p>
        <p>
          Também tem aquelas que procuram por questões de higiene. A dificuldade
          de higienizar a região causa acúmulo de secreções e urina, podendo
          causar infecções constantes, como por exemplo, a candidíase.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Contraindicações"}>
        <h1>Contraindicações</h1>
        <p>
          A <span>ninfoplastia</span> possui as mesmas contraindicações de
          outras cirurgias: pacientes com doenças crônicas, como diabetes,
          hipertensão, asma, insuficiência cardíaca, devem evitar procedimentos
          cirúrgicos.
        </p>
        <p>
          Pacientes com infecção ativa ou corrimentos precisam realizar o
          tratamento antes da cirurgia para que não ocorram problemas
          posteriores.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Pré-operatório"}>
        <h1>Pré-operatório</h1>
        <p>
          A <span>ninfoplastia</span> exige os mesmos cuidados preparatórios de
          outras cirurgias: estar acompanhado no dia da realização do
          procedimento, não realizar o uso de aspirina ou qualquer outro
          medicamento sem autorização médica, não fazer o uso de drogas, tabaco
          ou bebidas alcoólicas por no mínimo 3 semanas antes da cirurgia.
        </p>
        <p>
          No dia da consulta, todas as dúvidas são esclarecidas com o Dr. Ícaro
          Samuel.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Pós-operatório"}>
        <h1>Pós-operatório</h1>
        <p>
          Como qualquer outra cirurgia é necessário o repouso na primeira
          semana. Pode acontecer da região ficar arroxeada. As mulheres que
          possuem uma rotina mais agitada, realizando esforço físico ou que
          precisam caminhar muito, devem esperar pelo menos 3 semanas para
          voltar à rotina normal. Já as mulheres que trabalham em escritórios ou
          sem precisar realizar muito esforço podem voltar após uma semana. Em
          ambos os casose recomendado a utilização de roupas leves.
        </p>
        <p>
          A vida sexual precisa ser retomada após 30 a 45 dias, devido à
          cicatrização e a sensibilidade. Também é recomendado que a paciente
          não menstrue nos primeiros 30 dias, para não atrapalhar o processo de
          cicatrização que demora em torno de 40 dias. Sempre que utilizar o
          banheiro, faça a higienização com água e sabonete neutro.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "Como é feita"}>
        <h1>Como é feita</h1>
        <p>
          A <span>ninfoplastia</span> é realizada com anestesia, podendo ser
          raque ou peridural com sedação simples, permitindo que a paciente
          durma ao longo do procedimento. Em alguns casos pode-se utilizar a
          anestesia local, também com sedação, permitindo que haja alta no mesmo
          dia.
        </p>
        <p>
          Durante a cirurgia, o médico cirurgião retira parte dos pequenos
          lábios e reconstrói as estruturas. Os pontos são absorvíveis, ou seja,
          não é necessário retirar os pontos. As cicatrizes são pequenas e muito
          discretas, imperceptíveis aos olhos de outra pessoa. A ninfoplastia
          dura em média 1 hora. Por ser uma cirurgia simples e de pequeno porte,
          o paciente pode possivelmente, recebe alta no mesmo dia.
        </p>
        <p>
          A <span>ninfoplastia</span> é mais um procedimento criado para
          melhorar a autoestima da mulher, permitindo que seja feliz e realizada
          consigo mesma em todos os sentidos da sua vida.
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "Ninfoplastia")
    return (
      <BoxTextSelect>
        <h1>Ninfoplastia</h1>
        <p>
          A cada dia que passa mais pessoas buscam elevar sua autoestima,
          corrigindo defeitos que as incomodam esteticamente. Isso tudo tem
          relação com a felicidade, qualidade de vida e o bem-estar. As
          cirurgias plásticas vêm proporcionando essas mudanças, além dos
          procedimentos mais conhecidos como as plásticas nos seios, nariz,
          lipoaspiração, a<span>Ninfoplastia</span> vem sendo muito requisitada
          pelas mulheres para fazer reduções ou alterações dos pequenos lábios
          vaginais.
        </p>
      </BoxTextSelect>
    );
  if (text === "Indicações")
    return (
      <BoxTextSelect>
        <h1>Indicações</h1>
        <p>
          Na maioria dos casos, as mulheres que optam pela cirurgia plástica são
          devido a estética, que causa incômodo e afeta a autoestima,
          principalmente durante as relações sexuais.
        </p>
        <p>
          Outras buscam a cirurgia plástica de ninfoplastia por questões mais
          funcionais. Muitas mulheres sofrem dor por conta do tamanho dos
          lábios.
        </p>
        <p>
          Também tem aquelas que procuram por questões de higiene. A dificuldade
          de higienizar a região causa acúmulo de secreções e urina, podendo
          causar infecções constantes, como por exemplo, a candidíase.
        </p>
      </BoxTextSelect>
    );
  if (text === "Contraindicações")
    return (
      <BoxTextSelect >
        <h1>Contraindicações</h1>
        <p>
          A <span>ninfoplastia</span> possui as mesmas contraindicações de
          outras cirurgias: pacientes com doenças crônicas, como diabetes,
          hipertensão, asma, insuficiência cardíaca, devem evitar procedimentos
          cirúrgicos.
        </p>
        <p>
          Pacientes com infecção ativa ou corrimentos precisam realizar o
          tratamento antes da cirurgia para que não ocorram problemas
          posteriores.
        </p>
      </BoxTextSelect>
    );
  if (text === "Pré-operatório")
    return (
      <BoxTextSelect>
        <h1>Pré-operatório</h1>
        <p>
          A <span>ninfoplastia</span> exige os mesmos cuidados preparatórios de
          outras cirurgias: estar acompanhado no dia da realização do
          procedimento, não realizar o uso de aspirina ou qualquer outro
          medicamento sem autorização médica, não fazer o uso de drogas, tabaco
          ou bebidas alcoólicas por no mínimo 3 semanas antes da cirurgia.
        </p>
        <p>
          No dia da consulta, todas as dúvidas são esclarecidas com o Dr. Ícaro
          Samuel.
        </p>
      </BoxTextSelect>
    );
  if (text === "Pós-operatório")
    return (
      <BoxTextSelect>
        <h1>Pós-operatório</h1>
        <p>
          Como qualquer outra cirurgia é necessário o repouso na primeira
          semana. Pode acontecer da região ficar arroxeada. As mulheres que
          possuem uma rotina mais agitada, realizando esforço físico ou que
          precisam caminhar muito, devem esperar pelo menos 3 semanas para
          voltar à rotina normal. Já as mulheres que trabalham em escritórios ou
          sem precisar realizar muito esforço podem voltar após uma semana. Em
          ambos os casose recomendado a utilização de roupas leves.
        </p>
        <p>
          A vida sexual precisa ser retomada após 30 a 45 dias, devido à
          cicatrização e a sensibilidade. Também é recomendado que a paciente
          não menstrue nos primeiros 30 dias, para não atrapalhar o processo de
          cicatrização que demora em torno de 40 dias. Sempre que utilizar o
          banheiro, faça a higienização com água e sabonete neutro.
        </p>
      </BoxTextSelect>
    );
  if (text === "Como é feita")
    return (
      <BoxTextSelect>
        <h1>Como é feita</h1>
        <p>
          A <span>ninfoplastia</span> é realizada com anestesia, podendo ser
          raque ou peridural com sedação simples, permitindo que a paciente
          durma ao longo do procedimento. Em alguns casos pode-se utilizar a
          anestesia local, também com sedação, permitindo que haja alta no mesmo
          dia.
        </p>
        <p>
          Durante a cirurgia, o médico cirurgião retira parte dos pequenos
          lábios e reconstrói as estruturas. Os pontos são absorvíveis, ou seja,
          não é necessário retirar os pontos. As cicatrizes são pequenas e muito
          discretas, imperceptíveis aos olhos de outra pessoa. A ninfoplastia
          dura em média 1 hora. Por ser uma cirurgia simples e de pequeno porte,
          o paciente pode possivelmente, recebe alta no mesmo dia.
        </p>
        <p>
          A <span>ninfoplastia</span> é mais um procedimento criado para
          melhorar a autoestima da mulher, permitindo que seja feliz e realizada
          consigo mesma em todos os sentidos da sua vida.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
