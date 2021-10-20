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
      <BoxTextSelect isSelect={text === "O que é abdominoplastia"}>
        <h2>O que é abdominoplastia</h2>
        <p>
          <span>A abdominoplastia</span> é uma cirurgia plástica usada para
          retirar o excesso de tecido (pele e gordura) acumulado abaixo do
          umbigo, ajudando a diminuir a flacidez da barriga, deixando a barriga
          lisa e dura. Através do procedimento a gordura é queimada e os
          músculos costurados, além disso, dá para remover estrias e cicatrizes.
        </p>
        <p>
          A técnica pode ser feita tanto em mulheres como em homens, é indicada
          para quem perdeu muito peso ou após uma gravidez, e ficou com a região
          da barriga muito flácida.
        </p>
        <p>
          No caso de pacientes que apresentam
          <span> flacidez e excesso de pele </span>
          associado a <span> gordura localizada no abdômen </span> pode fazer uma
          lipoaspiração para retirar a gordura, e a <span>abdominoplastia </span>
          para corrigir a <span>flacidez e excesso de pele.</span>
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "Como funciona"}>
        <h2>Como funciona</h2>
        <p>
          O <span>procedimento de abdominoplastia</span> pode ser feito
          isoladamente, mas geralmente é associado à lipoaspiração, para obter
          melhores resultados e um melhor contorno corporal.
        </p>
        <p>
          A técnica não deve ser considerada como tratamento de obesidade, ou
          para excluir dietas e exercícios físicos.
          <span> A abdominoplastia </span> não é recomendada nos casos em que
          sejam previstos gestações futuras.
        </p>
        <p>
          A maioria das cirurgias para <span>correção do abdômen</span> costuma
          durar uma média de 2 a 5 horas. Para iniciar a cirurgia a área tratada
          deve ser limpa e as linhas de incisão devem ser desenhadas. Para
          procedimentos complexos, que envolvem remoção de grandes quantidades
          de tecido, ou a associação de outros procedimentos, usa-se anestesia
          geral.
        </p>
        <p>
          Quando se trata de um procedimento mais simples, será necessário
          apenas uma anestesia local e sedação, que auxiliam no conforto e
          relaxamento do paciente.
        </p>
        <p>O procedimento é realizado da seguinte forma:</p>
        <ul>
          <li>
            É feito um corte horizontal na região logo acima dos pelos pubianos
            que se estende até próximo dos quadris, levemente curvada para cima.
            A extensão desse corte e a forma variam conforme a quantidade de
            pele a ser retirada. Uma marcação em elipse é feita na hora da
            realização da primeira incisão da parte inferior. De acordo com a
            elipse marcada é que se faz a retirada da pele.
          </li>
          <li>
            O segundo corte é feito na vertical, finalizando ao redor do umbigo,
            por onde os excessos de pele da parte superior do abdômen são
            separados das partes profundas. É realizado um descolamento
            subcutâneo expondo os bordos da musculatura do reto abdominal.
          </li>
          <li>
            Nesse momento os músculos abdominais são suturados para que se
            tornem mais rígidos, o que irá proporcionar uma barriga mais plano e
            uma cintura mais definida. A pele em excesso é esticada para baixo
            para que seja removida e é feito um orifício para reposicionar o
            umbigo em sua posição de origem.
          </li>
          <li>
            Após a cirurgia, são colocados drenos de aspiração no abdômen, para
            evitar o acúmulo de líquidos na região abdominal. Esses drenos serão
            inseridos na parte inferior da barriga, próximo ao púbis, permitindo
            que a cicatriz seja disfarçada entre os pelos pubianos, mas nem
            sempre é necessário.
          </li>
        </ul>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Pré-operatório"}>
        <h2>Pré-operatório</h2>
        <p>
          Nos dias anteriores à cirurgia devem ser realizados todos os exames
          laboratoriais prescritos pelo médico, deve ser suspenso o uso de
          medicamentos anticoagulantes, como o ácido acetilsalicílico, e cigarro
          e bebidas alcoólicas, evitados. Sobre o uso de remédios, é fundamental
          informar ao médico, todos os medicamentos que estão sendo utilizados e
          qual o período de uso de cada um.
        </p>
        <p>
          Deve ser realizado jejum absoluto de sólidos e líquidos nas oito horas
          que antecedem o procedimento. Em caso de gripe ou mal estar, o médico
          deve ser avisado.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "Recuperação"}>
        <h2>Recuperação</h2>
        <p>
          A <span>recuperação da abdominoplastia</span> demora em média 2 meses,
          e requer do paciente alguns cuidados, principalmente com a postura,
          sendo recomendado não fazer esforços durante esse período e usar uma
          faixa abdominal.
        </p>
        <p>
          Podem surgir dores no abdômen e hematomas principalmente nas primeiras
          48 horas, isso é considerado comum após a cirurgia e passa em algumas
          semanas, em alguns pacientes é preciso deixar o dreno para evitar
          acumular líquidos no abdômen. Tendo sempre o acompanhamento médico.
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "O que é abdominoplastia")
    return (
      <BoxTextSelect>
        <h2>O que é abdominoplastia</h2>
        <p>
          <span>A abdominoplastia</span> é uma cirurgia plástica usada para
          retirar o excesso de tecido (pele e gordura) acumulado abaixo do
          umbigo, ajudando a diminuir a flacidez da barriga, deixando a barriga
          lisa e dura. Através do procedimento a gordura é queimada e os
          músculos costurados, além disso, dá para remover estrias e cicatrizes.
        </p>
        <p>
          A técnica pode ser feita tanto em mulheres como em homens, é indicada
          para quem perdeu muito peso ou após uma gravidez, e ficou com a região
          da barriga muito flácida.
        </p>
        <p>
          No caso de pacientes que apresentam
          <span> flacidez e excesso de pele </span>
          associado a <span>gordura localizada no abdômen</span> pode fazer uma
          lipoaspiração para retirar a gordura, e a <span> abdominoplastia </span>
          para corrigir a <span>flacidez e excesso de pele.</span>
        </p>
      </BoxTextSelect>
    );
  if (text === "Como funciona")
    return (
      <BoxTextSelect>
        <h2>Como funciona</h2>
        <p>
          O <span>procedimento de abdominoplastia</span> pode ser feito
          isoladamente, mas geralmente é associado à lipoaspiração, para obter
          melhores resultados e um melhor contorno corporal.
        </p>
        <p>
          A técnica não deve ser considerada como tratamento de obesidade, ou
          para excluir dietas e exercícios físicos.
          <span> A abdominoplastia </span> não é recomendada nos casos em que
          sejam previstos gestações futuras.
        </p>
        <p>
          A maioria das cirurgias para <span>correção do abdômen</span> costuma
          durar uma média de 2 a 5 horas. Para iniciar a cirurgia a área tratada
          deve ser limpa e as linhas de incisão devem ser desenhadas. Para
          procedimentos complexos, que envolvem remoção de grandes quantidades
          de tecido, ou a associação de outros procedimentos, usa-se anestesia
          geral.
        </p>
        <p>
          Quando se trata de um procedimento mais simples, será necessário
          apenas uma anestesia local e sedação, que auxiliam no conforto e
          relaxamento do paciente.
        </p>
        <p>O procedimento é realizado da seguinte forma:</p>
        <ul>
          <li>
            É feito um corte horizontal na região logo acima dos pelos pubianos
            que se estende até próximo dos quadris, levemente curvada para cima.
            A extensão desse corte e a forma variam conforme a quantidade de
            pele a ser retirada. Uma marcação em elipse é feita na hora da
            realização da primeira incisão da parte inferior. De acordo com a
            elipse marcada é que se faz a retirada da pele.
          </li>
          <li>
            O segundo corte é feito na vertical, finalizando ao redor do umbigo,
            por onde os excessos de pele da parte superior do abdômen são
            separados das partes profundas. É realizado um descolamento
            subcutâneo expondo os bordos da musculatura do reto abdominal.
          </li>
          <li>
            Nesse momento os músculos abdominais são suturados para que se
            tornem mais rígidos, o que irá proporcionar uma barriga mais plano e
            uma cintura mais definida. A pele em excesso é esticada para baixo
            para que seja removida e é feito um orifício para reposicionar o
            umbigo em sua posição de origem.
          </li>
          <li>
            Após a cirurgia, são colocados drenos de aspiração no abdômen, para
            evitar o acúmulo de líquidos na região abdominal. Esses drenos serão
            inseridos na parte inferior da barriga, próximo ao púbis, permitindo
            que a cicatriz seja disfarçada entre os pelos pubianos, mas nem
            sempre é necessário.
          </li>
        </ul>
      </BoxTextSelect>
    );
  if (text === "Pré-operatório")
    return (
      <BoxTextSelect>
        <h2>Pré-operatório</h2>
        <p>
          Nos dias anteriores à cirurgia devem ser realizados todos os exames
          laboratoriais prescritos pelo médico, deve ser suspenso o uso de
          medicamentos anticoagulantes, como o ácido acetilsalicílico, e cigarro
          e bebidas alcoólicas, evitados. Sobre o uso de remédios, é fundamental
          informar ao médico, todos os medicamentos que estão sendo utilizados e
          qual o período de uso de cada um.
        </p>
        <p>
          Deve ser realizado jejum absoluto de sólidos e líquidos nas oito horas
          que antecedem o procedimento. Em caso de gripe ou mal estar, o médico
          deve ser avisado.
        </p>
      </BoxTextSelect>
    );

  if (text === "Recuperação")
    return (
      <BoxTextSelect>
        <h2>Recuperação</h2>
        <p>
          A <span>recuperação da abdominoplastia</span> demora em média 2 meses,
          e requer do paciente alguns cuidados, principalmente com a postura,
          sendo recomendado não fazer esforços durante esse período e usar uma
          faixa abdominal.
        </p>
        <p>
          Podem surgir dores no abdômen e hematomas principalmente nas primeiras
          48 horas, isso é considerado comum após a cirurgia e passa em algumas
          semanas, em alguns pacientes é preciso deixar o dreno para evitar
          acumular líquidos no abdômen. Tendo sempre o acompanhamento médico.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
