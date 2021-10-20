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
      <BoxTextSelect isSelect={text === "mamoplastia"}>
        <h2>Mamoplastia</h2>
        <p>
          Muitas mulheres se sentem inseguras por ter seios pequenos ou
          “murchos”, e isso causa um desconforto muito grande. Esta parte do
          corpo representa para a mulher grande parte de sua feminilidade, e a
          insatisfação em relação aos seios pode prejudicar a autoestima e fazer
          com que ela se sinta desconfortável: fisicamente e emocionalmente.
        </p>
        <p>
          Este procedimento é feito em mulheres que possuem seios pequenos ou
          sem volume. A cirurgia é consiste na colocação de
          <span>implantes de silicone nas mamas.</span> A prótese garante
          firmeza, formato e aparência natural dos seios.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "O que é aMamoplastia de Aumento"}>
        <h2>O que é a Mamoplastia de Aumento</h2>
        <p>
          É a cirurgia plástica de aumento das mamas. Consiste na utilização de
          próteses de silicone para dar ou restaurar o volume mamário perdido e
          garantir maior firmeza. A técnica pode ser usada por quem tem as mamas
          pequenas ou quando houver a diminuição do tamanho devido à gravidez ou
          à perda de peso.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Indicação"}>
        <h2>Indicação</h2>
        <p>
          A Mamoplastia de aumentoé indicada para aquelas mulheres que querem
          aumentar, preencher ou alterar a forma das mamas. Podendo ser uma
          solução para a saúde física e psicológica. Mamas proporcionais e
          harmônicas com o corpo todo.
        </p>
        <p>
          A indicação para colocação da prótese na frente ou atrás do músculo
          peitoral varia de acordo com o <span>tipo</span> de mama da paciente.
          Se a mulher
        </p>
        <p>
          possui pouca glândula, comumente se põe atrás do músculo para que os
          implantes não fiquem muito aparentes. Quando a paciente tem uma
          quantidade de glândula para cobrir satisfatoriamente o implante,
          coloca-se na frente do músculo.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Preparo Necessário"}>
        <h2>Preparo Necessário</h2>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando os resultados e possíveis complicações
          e riscos. É analisada a melhor forma de colocar a
          <span> prótese de silicone </span>, para que a mesma tenha harmonia
          física com o corpo da mulher.
        </p>
        <p>
          Depois das avaliações do profissional, a paciente deve realizar os
          exames pré-operatórios de praxe: exame de sangue, eletrocardiograma,
          radiografia de tórax. Uma detalhada análise da mama com
          ultrassonografia e mamografia já deverá ter sido feita.
        </p>
        <ul>
          <li>
            8 horas antes do procedimento, é preciso fazer jejum absoluto de
            alimentos sólidos e líquidos.
          </li>
          <li>
            É necessário interromper o consumo de bebidas alcoólicas e fumo para
            realizar a cirurgia.
          </li>
        </ul>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "procedimento"}>
        <h2>Procedimento</h2>
        <p>
          O procedimento de
          <span> Prótese de Mamade Recuperação Rápida de 24 horas </span>
          (R24R) é surpreendente e tem uma aceitação incrível dentre as mulheres
          modernas, afinal, no dia seguinte já podem retomar as suas rotinas. O
          tempo de cirurgia é de aproximadamente 2 horas. Todo o processo
          utilizado por essa técnica é diferente, começando pela anestesia,
          seguindo aos instrumentais que são utilizados, o que possibilita a
          paciente acordar logo após a cirurgia sem dores, e com menor trauma,
          tendo alta do hospital entre 2 à 4 horas após o procedimento.
        </p>
        <p>
          Contudo, não devem e nem podem deixar de realizar seus exercícios pelo
          tempo previsto e continuar a seguir todas as orientações da equipe da
          Clínica Dr. Ícaro Samuel.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Pós Operatório"}>
        <h1>Fast Track Recovery</h1>
        <p>
          A reabilitação dessa paciente inicia ainda no centro cirúrgico, logo
          após a finalização do mesmo, com exercícios que são realizados pela
          equipe responsável pelo pós operatório imediato, e assim permitem que
          a paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas.
        </p>
        <p>
          Sempre bom lembrar que a técnica, por ter uma reabilitação mais
          rápida, exige que a paciente tenha hábitos de vida mais saudáveis.
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "mamoplastia")
    return (
      <BoxTextSelect>
        <h2>Mamoplastia</h2>
        <p>
          Muitas mulheres se sentem inseguras por ter seios pequenos ou
          “murchos”, e isso causa um desconforto muito grande. Esta parte do
          corpo representa para a mulher grande parte de sua feminilidade, e a
          insatisfação em relação aos seios pode prejudicar a autoestima e fazer
          com que ela se sinta desconfortável: fisicamente e emocionalmente.
        </p>
        <p>
          Este procedimento é feito em mulheres que possuem seios pequenos ou
          sem volume. A cirurgia é consiste na colocação de
          <span> implantes de silicone nas mamas. </span> A prótese garante
          firmeza, formato e aparência natural dos seios.
        </p>
      </BoxTextSelect>
    );
  if (text === "O que é aMamoplastia de Aumento")
    return (
      <BoxTextSelect>
        <h2>O que é a Mamoplastia de Aumento</h2>
        <p>
          É a cirurgia plástica de aumento das mamas. Consiste na utilização de
          próteses de silicone para dar ou restaurar o volume mamário perdido e
          garantir maior firmeza. A técnica pode ser usada por quem tem as mamas
          pequenas ou quando houver a diminuição do tamanho devido à gravidez ou
          à perda de peso.
        </p>
      </BoxTextSelect>
    );
  if (text === "Indicação")
    return (
      <BoxTextSelect>
        <h2>Indicação</h2>
        <p>
          A Mamoplastia de aumentoé indicada para aquelas mulheres que querem
          aumentar, preencher ou alterar a forma das mamas. Podendo ser uma
          solução para a saúde física e psicológica. Mamas proporcionais e
          harmônicas com o corpo todo.
        </p>
        <p>
          A indicação para colocação da prótese na frente ou atrás do músculo
          peitoral varia de acordo com o <span>tipo</span> de mama da paciente.
          Se a mulher
        </p>
        <p>
          possui pouca glândula, comumente se põe atrás do músculo para que os
          implantes não fiquem muito aparentes. Quando a paciente tem uma
          quantidade de glândula para cobrir satisfatoriamente o implante,
          coloca-se na frente do músculo.
        </p>
      </BoxTextSelect>
    );
  if (text === "Preparo Necessário")
    return (
      <BoxTextSelect isSelect={text === "Preparo Necessário"}>
        <h2>Preparo Necessário</h2>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando os resultados e possíveis complicações
          e riscos. É analisada a melhor forma de colocar a
          <span> prótese de silicone </span>, para que a mesma tenha harmonia
          física com o corpo da mulher.
        </p>
        <p>
          Depois das avaliações do profissional, a paciente deve realizar os
          exames pré-operatórios de praxe: exame de sangue, eletrocardiograma,
          radiografia de tórax. Uma detalhada análise da mama com
          ultrassonografia e mamografia já deverá ter sido feita.
        </p>
        <ul>
          <li>
            8 horas antes do procedimento, é preciso fazer jejum absoluto de
            alimentos sólidos e líquidos.
          </li>
          <li>
            É necessário interromper o consumo de bebidas alcoólicas e fumo para
            realizar a cirurgia.
          </li>
        </ul>
      </BoxTextSelect>
    );
  if (text === "procedimento")
    return (
      <BoxTextSelect>
        <h2>Procedimento</h2>
        <p>
          O procedimento de
          <span> Prótese de Mamade Recuperação Rápida de 24 horas </span>
          (R24R) é surpreendente e tem uma aceitação incrível dentre as mulheres
          modernas, afinal, no dia seguinte já podem retomar as suas rotinas. O
          tempo de cirurgia é de aproximadamente 2 horas. Todo o processo
          utilizado por essa técnica é diferente, começando pela anestesia,
          seguindo aos instrumentais que são utilizados, o que possibilita a
          paciente acordar logo após a cirurgia sem dores, e com menor trauma,
          tendo alta do hospital entre 2 à 4 horas após o procedimento.
        </p>
        <p>
          Contudo, não devem e nem podem deixar de realizar seus exercícios pelo
          tempo previsto e continuar a seguir todas as orientações da equipe da
          Clínica Dr. Ícaro Samuel.
        </p>
      </BoxTextSelect>
    );
  if (text === "Fast Track Recovery")
    return (
      <BoxTextSelect>
        <h1>R24R - Fast Track Recovery</h1>
        <p>
          A reabilitação dessa paciente inicia ainda no centro cirúrgico, logo
          após a finalização do mesmo, com exercícios que são realizados pela
          equipe responsável pelo pós operatório imediato, e assim permitem que
          a paciente retome sua atividade no dia seguinte, podendo inclusive
          voltar a dirigir e pegar peso de até 15 kg, obviamente que obedecendo
          todas as recomendações especificas.
        </p>
        <p>
          Sempre bom lembrar que a técnica, por ter uma reabilitação mais
          rápida, exige que a paciente tenha hábitos de vida mais saudáveis.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
