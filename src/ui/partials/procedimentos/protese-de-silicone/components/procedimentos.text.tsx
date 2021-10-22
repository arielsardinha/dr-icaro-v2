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
      <BoxTextSelect isSelect={text === "Prótese de Recuperação Rápida"}>
        <h1>Prótese de Recuperação Rápida 24H R24R</h1>
        <p>
          O procedimento de Prótese de Recuperação Rápida em 24h
          <span> (Fast Track Recovery) </span> ou R24R, trata-se de uma técnica
          que já vinha sendo utilizada em outros procedimentos cirúrgicos, e nos
          últimos anos começou a ser utilizada pela mamoplastia, auxiliando
          assim as pacientes a terem uma recuperação mais rápida e menos
          dolorida em seu pós-operatório.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Benefícios"}>
        <h2>Benefícios</h2>
        <p>
          Com a técnica R24R você terá alta do hospital entre 3 a 4 horas após o
          procedimento. No dia seguinte, já pode retornar as suas atividades
          diárias como trabalhar, dirigir, pentear os cabelos – podendo levantar
          até 15 quilos. Após 3 semanas, é possível retornar as atividades
          físicas normalmente.
        </p>
        <p>
          Além do tempo, a técnica traz mais segurança e resultado. O implante
          de silicone é posicionado abaixo do músculo, assim impede que a
          prótese se desloque. Também não deixa a pele marcada com
          irregularidades da prótese, dando uma aparência mais natural.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "Indicação"}>
        <h2>Indicação</h2>
        <p>
          Está técnica é para as mulheres que buscam um excelente resultado e
          querem voltar as suas atividades em pouco tempo.
        </p>
        <p>Para aquelas que querem</p>
        <ul>
          <li>Aumentar o tamanho e a projeção das mamas;</li>
          <li>Um corpo com aparência mais harmônica;</li>
          <li>Simetria das mamas;</li>
          <li>Melhorar a autoestima e confiança.</li>
        </ul>
        <p>
          Lembrando que você irá passa por uma avaliação comigo previamente.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Procedimento"}>
        <h2>Procedimento</h2>
        <p>
          A técnica da R24R consiste na introdução do implante mamário com Grip
          Plane (Dual Plane ou planoduplo) muscular e subglandular.
        </p>
        <p>
          O implante submuscular permite um colo mais marcado, juntinho e que
          não se desloca para a lateral ao deitar-se, permite ainda maior
          durabilidade do resultado sem queda das mamas a curto prazo, o que
          muitas vezes pode ser vista na técnica convencional subglandular e com
          próteses grandes.
        </p>
        <p>Após a colocação do implante de silicone é feito o Sutiã Interno.</p>
        <p>
          <span>O que é e para que serve o Sutiã Interno?</span>
        </p>
        <p>
          É uma técnica onde é feita a fixação do sulco mamário com fio farpado
          cirúrgico. Com o sutiã interno a prótese fica firme, resultando em
          maior confortoe prevenindo a flacidez da mama por gravidade.
        </p>
        <p>
          Resumindo, ela exerce a mesma função de um sutiã: sustentação da mama.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Pós Operatório"}>
        <h2>Pós Operatório</h2>
        <p>
          A reabilitação dessa paciente, inicia ainda no centro cirúrgico, logo
          após a finalização do mesmo, com exercícios que são realizados pela
          equipe responsável pelo pós operatório imediato, e assim permitem que
          a paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas do seu cirurgião.A reabilitação
          dessa paciente, inicia ainda no centro cirúrgico, logo após a
          finalização do mesmo, com exercícios que são realizados pela equipe
          responsável pelo pós operatório imediato, e assim permitem que a
          paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas do seu cirurgião.Sempre bom lembrar
          que a técnica, por ter uma reabilitação mais rápida, exige que a
          paciente tenha hábitos de vida mais saudáveis.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Preparo Necessário"}>
        <h2>Preparo Necessário</h2>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando os resultados e possíveis complicações
          e riscos. É analisada a melhor forma de colocar a prótese de silicone,
          para que a mesma tenha harmonia física com o corpo da mulher.
        </p>
        <p>
          Depois das avaliações do profissional, a paciente deve realizar os
          exames pré-operatórios de praxe: exame de sangue, eletrocardiograma,
          radiografia de tórax. Uma detalhada análise da mama com
          ultrassonografia e mamografia já deverá ter sido feita.
        </p>
        <p>
          8 horas antes do procedimento, é preciso fazer jejum absoluto de
          alimentos sólidos e líquidos. É necessário interromper o consumo de
          bebidas alcoólicas e fumo para realizar a cirurgia.
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "Prótese de Recuperação Rápida")
    return (
      <BoxTextSelect>
        <h2>Prótese de Recuperação Rápida 24H R24R</h2>
        <p>
          O procedimento de Prótese de Recuperação Rápida em 24h
          <span> (Fast Track Recovery) </span> ou R24R, trata-se de uma técnica
          que já vinha sendo utilizada em outros procedimentos cirúrgicos, e nos
          últimos anos começou a ser utilizada pela mamoplastia, auxiliando
          assim as pacientes a terem uma recuperação mais rápida e menos
          dolorida em seu pós-operatório.
        </p>
      </BoxTextSelect>
    );
  if (text === "Benefícios")
    return (
      <BoxTextSelect>
        <h2>Benefícios</h2>
        <p>
          Com a técnica R24R você terá alta do hospital entre 3 a 4 horas após o
          procedimento. No dia seguinte, já pode retornar as suas atividades
          diárias como trabalhar, dirigir, pentear os cabelos – podendo levantar
          até 15 quilos. Após 3 semanas, é possível retornar as atividades
          físicas normalmente.
        </p>
        <p>
          Além do tempo, a técnica traz mais segurança e resultado. O implante
          de silicone é posicionado abaixo do músculo, assim impede que a
          prótese se desloque. Também não deixa a pele marcada com
          irregularidades da prótese, dando uma aparência mais natural.
        </p>
      </BoxTextSelect>
    );
  if (text === "Indicação")
    return (
      <BoxTextSelect>
        <h2>Indicação</h2>
        <p>
          Está técnica é para as mulheres que buscam um excelente resultado e
          querem voltar as suas atividades em pouco tempo.
        </p>
        <p>Para aquelas que querem</p>
        <ul>
          <li>Aumentar o tamanho e a projeção das mamas;</li>
          <li>Um corpo com aparência mais harmônica;</li>
          <li>Simetria das mamas;</li>
          <li>Melhorar a autoestima e confiança.</li>
        </ul>
        <p>
          Lembrando que você irá passa por uma avaliação comigo previamente.
        </p>
      </BoxTextSelect>
    );
  if (text === "Procedimento")
    return (
      <BoxTextSelect>
        <h2>Procedimento</h2>
        <p>
          A técnica da R24R consiste na introdução do implante mamário com Grip
          Plane (Dual Plane ou planoduplo) muscular e subglandular.
        </p>
        <p>
          O implante submuscular permite um colo mais marcado, juntinho e que
          não se desloca para a lateral ao deitar-se, permite ainda maior
          durabilidade do resultado sem queda das mamas a curto prazo, o que
          muitas vezes pode ser vista na técnica convencional subglandular e com
          próteses grandes.
        </p>
        <p>Após a colocação do implante de silicone é feito o Sutiã Interno.</p>
        <p>
          <span>O que é e para que serve o Sutiã Interno?</span>
        </p>
        <p>
          É uma técnica onde é feita a fixação do sulco mamário com fio farpado
          cirúrgico. Com o sutiã interno a prótese fica firme, resultando em
          maior confortoe prevenindo a flacidez da mama por gravidade.
        </p>
        <p>
          Resumindo, ela exerce a mesma função de um sutiã: sustentação da mama.
        </p>
      </BoxTextSelect>
    );
  if (text === "Pós Operatório")
    return (
      <BoxTextSelect>
        <h2>Pós Operatório</h2>
        <p>
          A reabilitação dessa paciente, inicia ainda no centro cirúrgico, logo
          após a finalização do mesmo, com exercícios que são realizados pela
          equipe responsável pelo pós operatório imediato, e assim permitem que
          a paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas do seu cirurgião.A reabilitação
          dessa paciente, inicia ainda no centro cirúrgico, logo após a
          finalização do mesmo, com exercícios que são realizados pela equipe
          responsável pelo pós operatório imediato, e assim permitem que a
          paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas do seu cirurgião.Sempre bom lembrar
          que a técnica, por ter uma reabilitação mais rápida, exige que a
          paciente tenha hábitos de vida mais saudáveis.
        </p>
      </BoxTextSelect>
    );
  if (text === "Preparo Necessário")
    return (
      <BoxTextSelect>
        <h2>Preparo Necessário</h2>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando os resultados e possíveis complicações
          e riscos. É analisada a melhor forma de colocar a prótese de silicone,
          para que a mesma tenha harmonia física com o corpo da mulher.
        </p>
        <p>
          Depois das avaliações do profissional, a paciente deve realizar os
          exames pré-operatórios de praxe: exame de sangue, eletrocardiograma,
          radiografia de tórax. Uma detalhada análise da mama com
          ultrassonografia e mamografia já deverá ter sido feita.
        </p>
        <p>
          8 horas antes do procedimento, é preciso fazer jejum absoluto de
          alimentos sólidos e líquidos. É necessário interromper o consumo de
          bebidas alcoólicas e fumo para realizar a cirurgia.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
