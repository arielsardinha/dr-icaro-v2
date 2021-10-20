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
        <h2>Prótese de Recuperação Rápida 24H R24R</h2>
        <p>
          O procedimento de Prótese de Recuperação Rápida em 24h
          <span>(Fast Track Recovery)</span> ou R24R, trata-se de uma técnica
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
      <BoxTextSelect isSelect={text === "Pré e Pós-operatório"}>
        <h2>Pré e Pós-operatório</h2>
        <p>
          O pré-operatório da R24Rconsiste em uma avaliação, onde verificaremos,
          primeiramente a sua saúde e estrutura corpórea.Fazendo assim uma
          harmonização do seu corpo para ver se enquadra as suas expectativas.
        </p>
        <p>
          Para melhorar sua experiência, no dia da sua consulta – Dream Day
          <a href="">(link para a página do Dream Day)</a>, você
          utilizaráoCrisalix, que é uma
        </p>
        <p>
          tecnologia de realidade 3D onde através de uma simulação de realidade
          aumentada você consegue verificar seu resultado cirúrgico.
        </p>
        <p>
          Após essaetapa passamos ao planejamento do seu sonho, com profissional
          especializado e, caso não tenha nenhuma ressalva, passamos aos seus
          exames cirúrgicos e recomendações pré-cirúrgicas.
        </p>
        <p>
          No pós-operatório você continuará em acompanhamento de minha equipe.
          Você terá um acompanhamento de uma enfermeira altamente especializada
          para lhe atender, cuidando de sua recuperação cirúrgica. Nosso
          acompanhamento no pós-cirúrgico e na sua recuperação, ainda é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas,
          concluindo assim de maneira eficiente e possibilitando o resultado
          esperado.
        </p>
        <p>
          Realizamos um protocolotécnico, isso possibilitará o seu retorno à sua
          rotina no dia seguinte à cirurgia. O banho já está liberado no dia do
          procedimento, bem como sair de casa na mesma noite, dirigir e retornar
          ao trabalho nos dias seguintes.
        </p>
        <p>
          Depois de 24 horas após o procedimento, você estará liberada para
          pegar até 15 kg.
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
          <span>(Fast Track Recovery)</span> ou R24R, trata-se de uma técnica
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
  if (text === "Pré e Pós-operatório")
    return (
      <BoxTextSelect>
        <h2>Pré e Pós-operatório</h2>
        <p>
          O pré-operatório da R24Rconsiste em uma avaliação, onde verificaremos,
          primeiramente a sua saúde e estrutura corpórea.Fazendo assim uma
          harmonização do seu corpo para ver se enquadra as suas expectativas.
        </p>
        <p>
          Para melhorar sua experiência, no dia da sua consulta – Dream Day
          <a href="">(link para a página do Dream Day)</a>, você
          utilizaráoCrisalix, que é uma
        </p>
        <p>
          tecnologia de realidade 3D onde através de uma simulação de realidade
          aumentada você consegue verificar seu resultado cirúrgico.
        </p>
        <p>
          Após essaetapa passamos ao planejamento do seu sonho, com profissional
          especializado e, caso não tenha nenhuma ressalva, passamos aos seus
          exames cirúrgicos e recomendações pré-cirúrgicas.
        </p>
        <p>
          No pós-operatório você continuará em acompanhamento de minha equipe.
          Você terá um acompanhamento de uma enfermeira altamente especializada
          para lhe atender, cuidando de sua recuperação cirúrgica. Nosso
          acompanhamento no pós-cirúrgico e na sua recuperação, ainda é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas,
          concluindo assim de maneira eficiente e possibilitando o resultado
          esperado.
        </p>
        <p>
          Realizamos um protocolotécnico, isso possibilitará o seu retorno à sua
          rotina no dia seguinte à cirurgia. O banho já está liberado no dia do
          procedimento, bem como sair de casa na mesma noite, dirigir e retornar
          ao trabalho nos dias seguintes.
        </p>
        <p>
          Depois de 24 horas após o procedimento, você estará liberada para
          pegar até 15 kg.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
