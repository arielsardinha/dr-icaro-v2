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
      <BoxTextSelect isSelect={text === "Mastopexia"}>
        <h3>Mastopexia</h3>
        <p>
          Muitas mulheres se sentem inseguras por terem seios grandes, caídos e
          com flacidez. Esta parte do corpo representa para a mulher grande
          parte de sua feminilidade, e a insatisfação em relação aos seios pode
          prejudicar a autoestima e fazer com que ela se sinta desconfortável:
          fisicamente e emocionalmente.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "O que é aMastopexia"}>
        <h3>O que é aMastopexia</h3>
        <p>
          A queda das mamas por perda de flacidez pode surgir devido ao
          envelhecimento, à gravidez e amamentação, oscilações de peso, ação da
          gravidade e hereditariedade.
        </p>
        <p>
          A mastopexia corresponde a cirurgia plástica de levantamento das
          mamas, reposicionando a aréola e o tecido mamário. Ela pode ser feita
          com ou sem a utilização de prótese de silicone.
        </p>
        <p>
          Este procedimento é realizado pelas mulheres que sofrem com o volume
          das mamas (hipertrofia mamária), onde será retirado o excesso de
          gordura. Essa cirurgia vai muito além da estética, podendo solucionar
          problemas como:
        </p>
        <ul>
          <li>
            Lesões nos ombros: causadas pelas alças do sutiã que sustentam o
            excesso de peso das mamas;
          </li>
          <li>
            Dores nas costas e pescoço: Além das dores, melhora a postura da
            paciente;
          </li>
          <li>
            Assaduras na pele: devido a constante fricção da pele abaixo das
            mamas (sulcos infra mamários);
          </li>
          <li>
            E problemas de autoestima: deixando de ser um desconforto para se
            tornar algo de elevação da autoestime e bem-estar.
          </li>
        </ul>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Indicação"}>
        <h3>Indicação</h3>
        <p>
          <span>Mastopexia com prótese de silicone:</span>
        </p>
        <p>
          É indicada para aquelas mulheres que desejam realizar o levantamento
          das mamas, mas também buscam um colo mais marcado, a mastopexia com
          prótese pode ser a solução.
        </p>
        <p>
          <span>Mastopexia sem prótese de silicone: </span>
        </p>
        <p>
          A mastopexia sem prótese correspondeao levantamento das mamas,
          reposicionando a aréola e o tecido mamário. Dependendoda quantidade de
          tecido mamário, é possível confeccionar uma espécie de “prótese
          natural”. Esse tecido ajuda a adicionar volume à parte superior e
          medial das mamas.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Preparo Necessário"}>
        <h3>Preparo Necessário</h3>
        <p>
          No <a href="">Dream Day</a> – dia da consulta com Dr. Ícaro Samuel - é
          realizadoa Bioimpedância da paciente.O exame proporciona uma abordagem
          integral e uniformizada dentro do contexto multidisciplinar, dando
          informações mais precisas sobre o estado nutricional da paciente, a
          fim de possibilitar a prevenção de doenças e/ou a melhora da condição
          física.
        </p>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando as possíveis complicações, riscos e
          resultado esperado.
        </p>
        <p>
          Depois das avaliações feitas pelo Dr. Ícaro Samuel, a paciente deve
          realizar os exames pré-operatórios de praxe: exame de sangue,
          eletrocardiograma, radiografia de tórax. Uma detalhada análise da mama
          com ultrassonografia e mamografia já deverá ter sido feita.
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
      <BoxTextSelect isSelect={text === "Procedimentos"}>
        <h3>Procedimentos</h3>
        <p>
          <span>Mastopexiacom Prótese de Silicone:</span>
        </p>
        <p>
          Este procedimento é feito em mulheres que desejam remover a flacidez e
          adicionar volume nas mamas, a cirurgia é realizadacom a colocação de
          <span>implantes de silicone nas mamas.</span> Para muitas ter seios
          grandes está associado à sensualidade, e é isso que elas buscam.
        </p>
        <p>
          A prótese garante firmeza, formato e aparência natural dos seios, o
          implante de silicone pode ser colocado no sulco mamário, aréola ou
          axila. A prótese é inserida sob ou sobre o músculo, ou seja, o
          implante pode ser inserido abaixo da glândula ou do músculo.
        </p>
        <p>
          A indicação para colocação da prótese na frente ou atrás do músculo
          peitoral varia de acordo com o tipo de mama da paciente. Se a mulher
          possui pouca glândula, comumente se põe atrás do músculo para que os
          implantes não fiquem muito aparentes; mas se a paciente tem uma
          quantidade de glândula para cobrir satisfatoriamente o implante,
          coloca-se na frente do músculo.
        </p>
        <p>
          <span>Mastopexia sem Prótese de Silicone:</span>
        </p>
        <p>
          É o procedimento que elimina completamente aquele excesso de pele,
          onde é levantado asmamas, deixando-as firmes novamente, na posição
          correta e simétrica.
        </p>
        <p>
          Primeiramente é realizado a marcação para definir onde será o novo
          posicionamento da mama;depois é removido o excesso de pele, faz-se o
          levantamentoda mama e a fixa-a no lugar correto. No final, é feito o
          reposicionamento da aréola.
        </p>
        <p>
          O tipo de incisão será definido pelo médico de acordo com a quantidade
          de pele a ser retirada. Porém, a cicatriz de mastopexia em T invertido
          é a mais usada, visto que promove um maior grau de elevação das mamas.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Reabilitação"}>
        <h3>Reabilitação</h3>
        <p>
          Os cuidados do pós-operatório são fundamentais na busca do melhor
          resultado. Não fazer esforços físicos nos primeiros dias é essencial
          para garantir a boa cicatrização da pele e das camadas internas.
        </p>
        <p>
          O repouso mínimo indicado é 15 dias. Em torno de 21 dias as pacientes
          estão habilitadas a retomarem as suas atividades diárias.
        </p>
        <p>
          Na recuperação é necessário seguir todas as recomendações médicas para
          garantir o melhor resultado possível, afinal esse é um dos momentos
          mais importantes da cirurgia!
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "Mastopexia")
    return (
      <BoxTextSelect>
        <h3>Mastopexia</h3>
        <p>
          Muitas mulheres se sentem inseguras por terem seios grandes, caídos e
          com flacidez. Esta parte do corpo representa para a mulher grande
          parte de sua feminilidade, e a insatisfação em relação aos seios pode
          prejudicar a autoestima e fazer com que ela se sinta desconfortável:
          fisicamente e emocionalmente.
        </p>
      </BoxTextSelect>
    );
  if (text === "O que é aMastopexia")
    return (
      <BoxTextSelect>
        <h3>O que é aMastopexia</h3>
        <p>
          A queda das mamas por perda de flacidez pode surgir devido ao
          envelhecimento, à gravidez e amamentação, oscilações de peso, ação da
          gravidade e hereditariedade.
        </p>
        <p>
          A mastopexia corresponde a cirurgia plástica de levantamento das
          mamas, reposicionando a aréola e o tecido mamário. Ela pode ser feita
          com ou sem a utilização de prótese de silicone.
        </p>
        <p>
          Este procedimento é realizado pelas mulheres que sofrem com o volume
          das mamas (hipertrofia mamária), onde será retirado o excesso de
          gordura. Essa cirurgia vai muito além da estética, podendo solucionar
          problemas como:
        </p>
        <ul>
          <li>
            Lesões nos ombros: causadas pelas alças do sutiã que sustentam o
            excesso de peso das mamas;
          </li>
          <li>
            Dores nas costas e pescoço: Além das dores, melhora a postura da
            paciente;
          </li>
          <li>
            Assaduras na pele: devido a constante fricção da pele abaixo das
            mamas (sulcos infra mamários);
          </li>
          <li>
            E problemas de autoestima: deixando de ser um desconforto para se
            tornar algo de elevação da autoestime e bem-estar.
          </li>
        </ul>
      </BoxTextSelect>
    );
  if (text === "Indicação")
    return (
      <BoxTextSelect>
        <h3>Indicação</h3>
        <p>
          <span>Mastopexia com prótese de silicone:</span>
        </p>
        <p>
          É indicada para aquelas mulheres que desejam realizar o levantamento
          das mamas, mas também buscam um colo mais marcado, a mastopexia com
          prótese pode ser a solução.
        </p>
        <p>
          <span>Mastopexia sem prótese de silicone: </span>
        </p>
        <p>
          A mastopexia sem prótese correspondeao levantamento das mamas,
          reposicionando a aréola e o tecido mamário. Dependendoda quantidade de
          tecido mamário, é possível confeccionar uma espécie de “prótese
          natural”. Esse tecido ajuda a adicionar volume à parte superior e
          medial das mamas.
        </p>
      </BoxTextSelect>
    );
  if (text === "Preparo Necessário")
    return (
      <BoxTextSelect>
        <h3>Preparo Necessário</h3>
        <p>
          No <a href="">Dream Day</a> – dia da consulta com Dr. Ícaro Samuel - é
          realizadoa Bioimpedância da paciente.O exame proporciona uma abordagem
          integral e uniformizada dentro do contexto multidisciplinar, dando
          informações mais precisas sobre o estado nutricional da paciente, a
          fim de possibilitar a prevenção de doenças e/ou a melhora da condição
          física.
        </p>
        <p>
          Antes do procedimento são fornecidas as pacientes todas as informações
          sobre a cirurgia, apresentando as possíveis complicações, riscos e
          resultado esperado.
        </p>
        <p>
          Depois das avaliações feitas pelo Dr. Ícaro Samuel, a paciente deve
          realizar os exames pré-operatórios de praxe: exame de sangue,
          eletrocardiograma, radiografia de tórax. Uma detalhada análise da mama
          com ultrassonografia e mamografia já deverá ter sido feita.
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
  if (text === "Procedimentos")
    return (
      <BoxTextSelect>
        <h3>Procedimentos</h3>
        <p>
          <span>Mastopexiacom Prótese de Silicone:</span>
        </p>
        <p>
          Este procedimento é feito em mulheres que desejam remover a flacidez e
          adicionar volume nas mamas, a cirurgia é realizadacom a colocação de
          <span>implantes de silicone nas mamas.</span> Para muitas ter seios
          grandes está associado à sensualidade, e é isso que elas buscam.
        </p>
        <p>
          A prótese garante firmeza, formato e aparência natural dos seios, o
          implante de silicone pode ser colocado no sulco mamário, aréola ou
          axila. A prótese é inserida sob ou sobre o músculo, ou seja, o
          implante pode ser inserido abaixo da glândula ou do músculo.
        </p>
        <p>
          A indicação para colocação da prótese na frente ou atrás do músculo
          peitoral varia de acordo com o tipo de mama da paciente. Se a mulher
          possui pouca glândula, comumente se põe atrás do músculo para que os
          implantes não fiquem muito aparentes; mas se a paciente tem uma
          quantidade de glândula para cobrir satisfatoriamente o implante,
          coloca-se na frente do músculo.
        </p>
        <p>
          <span>Mastopexia sem Prótese de Silicone:</span>
        </p>
        <p>
          É o procedimento que elimina completamente aquele excesso de pele,
          onde é levantado asmamas, deixando-as firmes novamente, na posição
          correta e simétrica.
        </p>
        <p>
          Primeiramente é realizado a marcação para definir onde será o novo
          posicionamento da mama;depois é removido o excesso de pele, faz-se o
          levantamentoda mama e a fixa-a no lugar correto. No final, é feito o
          reposicionamento da aréola.
        </p>
        <p>
          O tipo de incisão será definido pelo médico de acordo com a quantidade
          de pele a ser retirada. Porém, a cicatriz de mastopexia em T invertido
          é a mais usada, visto que promove um maior grau de elevação das mamas.
        </p>
      </BoxTextSelect>
    );
  if (text === "Reabilitação")
    return (
      <BoxTextSelect>
        <h3>Reabilitação</h3>
        <p>
          Os cuidados do pós-operatório são fundamentais na busca do melhor
          resultado. Não fazer esforços físicos nos primeiros dias é essencial
          para garantir a boa cicatrização da pele e das camadas internas.
        </p>
        <p>
          O repouso mínimo indicado é 15 dias. Em torno de 21 dias as pacientes
          estão habilitadas a retomarem as suas atividades diárias.
        </p>
        <p>
          Na recuperação é necessário seguir todas as recomendações médicas para
          garantir o melhor resultado possível, afinal esse é um dos momentos
          mais importantes da cirurgia!
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
