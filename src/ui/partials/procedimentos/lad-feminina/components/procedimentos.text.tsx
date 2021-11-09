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
      <BoxTextSelect isSelect={text === "lipoaspiração"}>
        <h2>Lipoaspiração</h2>
        <p>
          A <span>lipoaspiração de alta definição (Lipo LAD ou Lipo HD) </span>
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década.
        </p>
        <p>
          O principal objetivo do procedimento é recuperar a definição muscular
          perdida em virtude do processo de acumulo de gordura, além das
          vantagens da lipoaspiração convencional, o procedimento restaura os
          grupamentos musculares, conferindo ao corpo um aspecto mais atlético.
          Esse procedimento emprega uma técnica que traz de volta os famosos
          "gominhos" do abdômen. O nível de definição é de acordo com a
          preferência da paciente, dependendo a situação atual, mais as
          recomendações do Dr. Ícaro Samuel, podendo ser de: baixa definição,
          média definição (como diríamos, “barriga chapada”) e alta definição
          (com gominhos aparentes).
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
        </p>
        <p>
          Os resultados são perceptíveis instantaneamente, pois trabalha-se a
          estrutura corporal localizada, fazendo contornos com sombras que
          definem o corpo e deixam com aspecto mais atlético.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "o que é a lipo lad"}>
        <h2>O que é a lipo lad</h2>
        <p>
          É a evolução da lipoaspiração. Além de remover a gordura localizada, o
          corpo da paciente é “esculpido” durante o processo. Baseada em estudos
          da anatomia corporal avançados, é associada a
          <span> tecnologia ultrassônica </span>
          que minimiza os riscos e proporciona uma abordagem diferenciada nos
          depósitos de gordura corporal.
        </p>
        <p>
          A técnica busca realçar a musculatura de maneira artística, utilizando
          de tecnologias como: o Vaser Lipo - que realiza a emulsificação da
          gordura; o Microaire – que realiza a lipoaspiração dessa gordura
          localizada de forma pontual; e o Renuvion –jato de plasma que faz a
          “colagem” da pele no musculo para reduzir a flacidez e estimular o
          colágeno.
        </p>
        <p>
          Todas essas tecnologias são utilizadas para entregar mais segurança e
          resultados para as nossas pacientes.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "benefícios"}>
        <h2>Benefícios</h2>
        <p>
          A <span> LipoHD </span>, além de melhores resultados estéticos que as
          técnicas convencionais, reduziu os riscos pós-operatórios e o tempo de
          recuperação, e está indicada para aqueles pacientes que desejam obter
          um físico mais atlético sem gastar muitas horas na academia e/ou
          fazendo dietas rigorosas.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Lipo lad masculina"}>
        <h2>Lipo lad masculina</h2>
        <p>
          A Lipoaspiração de Alta Definição Masculina (Lipo HD) é muito
          semelhante a feminina. A maior diferença é em relação a anatomia do
          corpo. Geralmente as mulheres buscam um aspecto atlético mais magro,
          já os homens além da definição, também utilizam a técnica de lipo
          enxertia para posições onde o volume favorece a beleza, como no
          peitoral, deltoides, dorso e glúteos, enquanto o abdômen fica sem
          gordura e definido.
        </p>
      </BoxTextSelect>

      {/* <BoxTextSelect isSelect={text === "indicação"}>
        <h2>Indicação</h2>
        <p>
          Quanto às indicações, a Lipoaspiração de Alta Definição é para uma
          pessoa que sempre sonhou em ter um corpo atlético, e tem lutado por
          isso, pois leva uma rotina saudável, com boa alimentação, prática de
          exercícios e cuidados paliativos com a saúde.
        </p>
        <p>
          Além de melhorar a autoestima, o procedimento traz bem estar e
          qualidade de vida, possibilitando assim uma vida de mais harmonia
          pessoal em todos as áreas!
        </p>
        <p>
          A cirurgia Lipo LAD, mais que promover curvas e remover gordura, traz
          transformação de vida!
        </p>
        <p>
          Então se você tem o sonho de chegar ao corpo escultural, ou a barriga
          tanquinho, essa é a técnica que pode ajudar na realização desse
          objetivo.
        </p>
        <p>
          “Acredito muito no poder de cuidar de pessoas que a medicina tem, e
          quando falo sobre cuidar, generalizo o poder dessa palavra, pois em 20
          anos atuando, acompanhei mudanças incríveis pós realização de
          procedimento” – Dr. Ícaro Samuel.
        </p>
      </BoxTextSelect> */}
      <BoxTextSelect isSelect={text === "procedimento"}>
        <h2>Procedimento - como é feita a lipo lad (HD) ?</h2>
        <p>
          O procedimento consiste em associar equipamentos modernos que
          trabalham as camadas de gordura corporal por meio de emissões de ondas
          ultrassônicas, facilitando a remoção da gordura e alcançando áreas que
          não são atingidas pela lipo convencional, de maneira mais segura e
          eficiente, conseguindo dessa forma, entregar um resultado mais
          atlético, definido e harmônico para as pacientes.
        </p>
        <p>
          A duração do procedimento depende das necessidades de cada caso,
          variando de 1 a 3 horas, em média.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "pré e pós operatório"}>
        <h2>Pré e pós operatório</h2>
        <p>
          O <span>pré-operatório</span> da Lipo LAD consiste em uma avaliação,
          onde verificaremos: sua saúde, estrutura corpórea e o procedimento que
          pretende realizar, fazendo assim uma harmonização do seu corpo para
          ver se enquadra as suas expectativas.
        </p>
        <p>
          Após essa etapa passamos ao planejamento do seu sonho, com
          profissional especializado e, caso não tenha nenhuma ressalva,
          passamos aos seus exames cirúrgicos e recomendações pré-cirúrgicas!
        </p>
        <p>
          Já no <span>pós-operatório</span> você continuará em acompanhamento de
          minha equipe, que faz inclusive um acompanhamento exclusivo de
          Homecare, ou seja, nos primeiros 5 dias você terá um acompanhamento de
          uma enfermeira altamente especializada para lhe atender, cuidando de
          sua recuperação cirúrgica!
        </p>
        <p>
          No nosso acompanhamento pós-cirúrgico de sua recuperação, também é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas para
          realizar as drenagens e possibilitar um resultado de colagem do tecido
          bem feita, entregando resultados mais eficientes.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Qual o preço"}>
        <h2>Qual o preço de uma lipo lad ?</h2>
        <p>
          O Conselho Federal de Medicina e o Regimento Interno da Sociedade
          Brasileira de Cirurgia Plástica proíbem a divulgação de preços de
          cirurgias plásticas pela internet. Por isso, os valores são passados
          apenas após uma avaliação na consulta. Lembrando que cada corpo é
          individual. O valor da lipo lad é o empoderamento e aumento da
          autoestima. Melhor qualidade de vida, tanto física quanto emocional!
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Antes e depois"}>
        <h2>Antes e depois</h2>
        <p>
          Assim como os preços, mostrar fotos de antes e depois da lipo hd (ou
          lipo lad) também são proibidos. Isso porque o cirurgião plástico não
          pode prometer resultados, justamente porque cada corpo possui suas
          características físicas únicas.
        </p>
        <p>
          Durante a sua avaliação física na consulta com o Dr. Ícaro Samuel, é
          permitido a ele apresentar resultados de forma a instruir melhor a
          paciente.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "Sobre o Autor"}>
        <h2>Sobre o Autor</h2>
        <p>
          Sou Ícaro Samuel, Cirurgião Plástico, apaixonado e eterno discente
          sobre avanços tecnológicos e novas técnicas, principalmente no que
          tange a Lipo HD. Minha paixão iniciou quando fiz o curso com o
          Criador/Mestre da técnica Total Definer, Alfredo Hoyos, uma referência
          mundial dentro do campo da Cirurgia Plástica. Pois, mais que realizar
          a lipoaspiração de gordura, a técnica Total Definer esculpe corpos,
          modelando conforme a musculatura do paciente, realçando seus contornos
          e promovendo um corpo atlético e belo!
        </p>
        <p>Sou Embaixador Total Definer Brasil.</p>
        <p>
          Aliado a técnica inovadora, busquei em feiras e congressos de
          medicina, tecnologias que pudessem otimizar a qualidade do resultado,
          e surpreendentemente encontrei o Vaser Lipo e o Vibro Lipo, duas
          tecnologias que possibilitam um resultado ainda mais espetacular, por
          promover a “colagem” da pele no músculo e diminuir a flacidez dos
          locais lipados. Outro grande trunfo de nosso sucesso é a alta
          performance dos resultados cirúrgicos através de uma equipe de
          profissionais altamente qualificadas para o pós cirúrgico e
          acompanhamento dos primeiros dias em Homecare, para quem mora em
          Palmas.
        </p>
      </BoxTextSelect>
    </>
  );
};

const ProcedimentosMobile = ({ text }) => {
  if (text === "lipoaspiração")
    return (
      <BoxTextSelect>
        <h2>Lipoaspiração</h2>
        <p>
          A <span>lipoaspiração de alta definição (Lipo LAD ou Lipo HD) </span>
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década.
        </p>
        <p>
          O principal objetivo do procedimento é recuperar a definição muscular
          perdida em virtude do processo de acumulo de gordura, além das
          vantagens da lipoaspiração convencional, o procedimento restaura os
          grupamentos musculares, conferindo ao corpo um aspecto mais atlético.
          Esse procedimento emprega uma técnica que traz de volta os famosos
          "gominhos" do abdômen. O nível de definição é de acordo com a
          preferência da paciente, dependendo a situação atual, mais as
          recomendações do Dr. Ícaro Samuel, podendo ser de: baixa definição,
          média definição (como diríamos, “barriga chapada”) e alta definição
          (com gominhos aparentes).
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
        </p>
        <p>
          Os resultados são perceptíveis instantaneamente, pois trabalha-se a
          estrutura corporal localizada, fazendo contornos com sombras que
          definem o corpo e deixam com aspecto mais atlético.
        </p>
      </BoxTextSelect>
    );
  if (text === "o que é a lipo lad")
    return (
      <BoxTextSelect>
        <h2>O que é a lipo lad</h2>
        <p>
          É a evolução da lipoaspiração. Além de remover a gordura localizada, o
          corpo da paciente é “esculpido” durante o processo. Baseada em estudos
          da anatomia corporal avançados, é associada a
          <span> tecnologia ultrassônica </span>
          que minimiza os riscos e proporciona uma abordagem diferenciada nos
          depósitos de gordura corporal.
        </p>
        <p>
          A técnica busca realçar a musculatura de maneira artística, utilizando
          de tecnologias como: o Vaser Lipo - que realiza a emulsificação da
          gordura; o Microaire – que realiza a lipoaspiração dessa gordura
          localizada de forma pontual; e o Renuvion –jato de plasma que faz a
          “colagem” da pele no musculo para reduzir a flacidez e estimular o
          colágeno.
        </p>
        <p>
          Todas essas tecnologias são utilizadas para entregar mais segurança e
          resultados para as nossas pacientes.
        </p>
      </BoxTextSelect>
    );
  if (text === "benefícios")
    return (
      <BoxTextSelect>
        <h2>Benefícios</h2>
        <p>
          A <span> LipoHD </span>, além de melhores resultados estéticos que as
          técnicas convencionais, reduziu os riscos pós-operatórios e o tempo de
          recuperação, e está indicada para aqueles pacientes que desejam obter
          um físico mais atlético sem gastar muitas horas na academia e/ou
          fazendo dietas rigorosas.
        </p>
      </BoxTextSelect>
    );
  if (text === "Lipo lad masculina")
    return (
      <BoxTextSelect>
        <h2>Lipo lad masculina</h2>
        <p>
          A Lipoaspiração de Alta Definição Masculina (Lipo HD) é muito
          semelhante a feminina. A maior diferença é em relação a anatomia do
          corpo. Geralmente as mulheres buscam um aspecto atlético mais magro,
          já os homens além da definição, também utilizam a técnica de lipo
          enxertia para posições onde o volume favorece a beleza, como no
          peitoral, deltoides, dorso e glúteos, enquanto o abdômen fica sem
          gordura e definido.
        </p>
      </BoxTextSelect>
    );
  // if (text === "indicação")
  //   return (
  //     <BoxTextSelect>
  //       <h2>Indicação</h2>
  //       <p>
  //         Quanto às indicações, a Lipoaspiração de Alta Definição é para uma
  //         pessoa que sempre sonhou em ter um corpo atlético, e tem lutado por
  //         isso, pois leva uma rotina saudável, com boa alimentação, prática de
  //         exercícios e cuidados paliativos com a saúde.
  //       </p>
  //       <p>
  //         Além de melhorar a autoestima, o procedimento traz bem estar e
  //         qualidade de vida, possibilitando assim uma vida de mais harmonia
  //         pessoal em todos as áreas!
  //       </p>
  //       <p>
  //         Concluindo, a cirurgia Lipo LAD, mais que promover curvas e remover
  //         gordura, traz transformação de vida!
  //       </p>
  //       <p>
  //         “Acredito muito no poder de cuidar de pessoas que a medicina tem, e
  //         quando falo sobre cuidar, generalizo o poder dessa palavra, pois em 20
  //         anos atuando, acompanhei mudanças incríveis pós realização de
  //         procedimento” – Dr. Ícaro Samuel.
  //       </p>
  //     </BoxTextSelect>
  //   );
  if (text === "procedimento")
    return (
      <BoxTextSelect>
        <h2>Procedimento</h2>
        <p>
          O procedimento consiste em associar equipamentos modernos que
          trabalham as camadas de gordura corporal por meio de emissões de ondas
          ultrassônicas, facilitando a remoção da gordura e alcançando áreas que
          não são atingidas pela lipo convencional, de maneira mais segura e
          eficiente, conseguindo dessa forma, entregar um resultado mais
          atlético, definido e harmônico para as pacientes.
        </p>
        <p>
          A duração do procedimento depende das necessidades de cada caso,
          variando de 1 a 3 horas, em média.
        </p>
      </BoxTextSelect>
    );
  if (text === "pré e pós operatório")
    return (
      <BoxTextSelect>
        <h2>Pré e pós operatório</h2>
        <p>
          O <span>pré-operatório</span> da Lipo LAD consiste em uma avaliação,
          onde verificaremos: sua saúde, estrutura corpórea e o procedimento que
          pretende realizar, fazendo assim uma harmonização do seu corpo para
          ver se enquadra as suas expectativas.
        </p>
        <p>
          Após essa etapa passamos ao planejamento do seu sonho, com
          profissional especializado e, caso não tenha nenhuma ressalva,
          passamos aos seus exames cirúrgicos e recomendações pré-cirúrgicas!
        </p>
        <p>
          Já no <span>pós-operatório</span> você continuará em acompanhamento de
          minha equipe, que faz inclusive um acompanhamento exclusivo de
          Homecare, ou seja, nos primeiros 5 dias você terá um acompanhamento de
          uma enfermeira altamente especializada para lhe atender, cuidando de
          sua recuperação cirúrgica!
        </p>
        <p>
          No nosso acompanhamento pós-cirúrgico de sua recuperação, também é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas para
          realizar as drenagens e possibilitar um resultado de colagem do tecido
          bem feita, entregando resultados mais eficientes.
        </p>
      </BoxTextSelect>
    );
  if (text === "Qual o preço")
    return (
      <BoxTextSelect>
        <h2>Qual o preço de uma lipo lad ?</h2>
        <p>
          O Conselho Federal de Medicina e o Regimento Interno da Sociedade
          Brasileira de Cirurgia Plástica proíbem a divulgação de preços de
          cirurgias plásticas pela internet. Por isso, os valores são passados
          apenas após uma avaliação na consulta. Lembrando que cada corpo é
          individual. O valor da lipo lad é o empoderamento e aumento da
          autoestima. Melhor qualidade de vida, tanto física quanto emocional!
        </p>
      </BoxTextSelect>
    );
  if (text === "Antes e depois")
    return (
      <BoxTextSelect>
        <h2>Antes e depois</h2>
        <p>
          Assim como os preços, mostrar fotos de antes e depois da lipo hd (ou
          lipo lad) também são proibidos. Isso porque o cirurgião plástico não
          pode prometer resultados, justamente porque cada corpo possui suas
          características físicas únicas.
        </p>
        <p>
          Durante a sua avaliação física na consulta com o Dr. Ícaro Samuel, é
          permitido a ele apresentar resultados de forma a instruir melhor a
          paciente.
        </p>
      </BoxTextSelect>
    );
  if (text === "Sobre o Autor")
    return (
      <BoxTextSelect>
        <h2>Sobre o Autor</h2>
        <p>
          Sou Ícaro Samuel, Cirurgião Plástico, apaixonado e eterno discente
          sobre avanços tecnológicos e novas técnicas, principalmente no que
          tange a Lipo HD. Minha paixão iniciou quando fiz o curso com o
          Criador/Mestre da técnica Total Definer, Alfredo Hoyos, uma referência
          mundial dentro do campo da Cirurgia Plástica. Pois, mais que realizar
          a lipoaspiração de gordura, a técnica Total Definer esculpe corpos,
          modelando conforme a musculatura do paciente, realçando seus contornos
          e promovendo um corpo atlético e belo!
        </p>
        <p>Sou Embaixador Total Definer Brasil.</p>
        <p>
          Aliado a técnica inovadora, busquei em feiras e congressos de
          medicina, tecnologias que pudessem otimizar a qualidade do resultado,
          e surpreendentemente encontrei o Vaser Lipo e o Vibro Lipo, duas
          tecnologias que possibilitam um resultado ainda mais espetacular, por
          promover a “colagem” da pele no músculo e diminuir a flacidez dos
          locais lipados. Outro grande trunfo de nosso sucesso é a alta
          performance dos resultados cirúrgicos através de uma equipe de
          profissionais altamente qualificadas para o pós cirúrgico e
          acompanhamento dos primeiros dias em Homecare, para quem mora em
          Palmas.
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
