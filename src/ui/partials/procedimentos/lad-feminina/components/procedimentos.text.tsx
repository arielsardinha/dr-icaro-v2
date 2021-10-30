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
          A <span>lipoaspiração</span> de alta definição (Lipo LAD ou Lipo HD)
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década! Baseada em estudos da
          anatomia corporal avançadas, é associada a tecnologia VASER que
          minimiza os riscos e proporciona uma abordagem diferenciada nos
          depósitos de gordura corporal. O principal objetivo do procedimento é
          recuperar a definição muscular perdida em virtude do processo de
          acumulo de gordura, além das vantagens da lipoaspiração convencional,
          o procedimento restaura os grupamentos musculares, conferindo ao corpo
          um aspecto mais atético, esse procedimento emprega uma técnica que
          traz de volta as famosas "gominhas" do abdômen.
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
          Os resultados são perceptíveis logo que instantâneos, pois trabalha-se
          a estrutura corporal localizada. Os resultados são perceptíveis logo
          que instantâneos, pois trabalha-se a estrutura corporal da(o)
          paciente, fazendo contornos com sombras que definem o corpo e deixam
          com aspecto mais atlético. A técnica busca realçar a musculatura de
          maneira artística, utilizando de tecnologias com vaser Lipo que
          realiza a emulsificação da gordura e a retirada da mesma, o que
          permite a cirurgia LAD 4D deixa mais evidente a musculatura, fazendo
          com que sombras e contornos apareçam, delimitando assim curvas que
          tragam um aspecto mais atlético a essa paciente.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "o que é a lipo lad"}>
        <h2>O que é a lipo lad</h2>
        <p>
          A <span>lipoaspiração de alta definição (Lipo LAD ou Lipo HD)</span>
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década.
        </p>
        <p>
          Baseada em estudos da anatomia corporal avançados, é associada a
          <span> tecnologia ultrassônica </span> que minimiza os riscos e
          proporciona uma abordagem diferenciada nos depósitos de gordura
          corporal.
        </p>
        <p>
          O principal objetivo do procedimento é recuperar a definição muscular
          perdida em virtude do processo de acúmulode gordura, além das
          vantagens da lipoaspiração convencional, o procedimento restaura os
          grupamentos musculares, conferindo ao corpo um aspecto mais atlético,
        </p>
        <p>
          esse procedimento emprega uma técnica que traz de volta os famosos
          “gominhos” do abdômen.
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
        </p>
        <p>
          Os resultados são perceptíveis logo que instantâneos, pois trabalha-se
          a estrutura corporal da(o) paciente, fazendo contornos com sombras que
          definem o corpo e deixam com aspecto mais atlético.
        </p>
        <p>
          Durante o procedimento, várias tecnologias são aplicadas para dar mais
          segurança e resultado as pacientes. Além de remover a gordura que está
          entre a pele e a musculatura, depois é aplicado um jato de plasma para
          que a pele cole no músculo. Assim, reduzindo a flacidez e estimulando
          o colágeno na pele.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "benefícios"}>
        <h2>Benefícios</h2>
        <p>
          A <span>LipoHD</span>, além de melhores resultados estéticos que as
          técnicas convencionais, reduziu os riscos pós-operatórios e melhorou o
          tempo de recuperação, e está indicada para aqueles pacientes que
          desejam obter um físico mais atlético sem gastar muitas horas na
          academia e/ou fazendo dietas rigorosas.
        </p>
      </BoxTextSelect>

      <BoxTextSelect isSelect={text === "indicação"}>
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
          Concluindo, a cirurgia Lipo LAD, mais que promover curvas e remover
          gordura, traz transformação de vida!
        </p>
        <p>
          “Acredito muito no poder de cuidar de pessoas que a medicina tem, e
          quando falo sobre cuidar, generalizo o poder dessa palavra, pois em 20
          anos atuando, acompanhei mudanças incríveis pós realização de
          procedimento” – Dr. Ícaro Samuel.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "procedimento"}>
        <h2>Procedimento</h2>
        <p>
          O procedimento consiste em associar equipamentos modernos que
          trabalham as camadas de gordura corporal por meio de emissões de ondas
          ultrassônicas, facilitando a remoção da gordura, alcançando áreas que
          não são atingidas pela lipo convencional, de maneira mais segura e
          eficiente, conseguindo dessa forma, entregar um resultado mais
          atlético, definido e harmônico para as pacientes.
        </p>
        <p>
          Então se você tem o sonho de chegar ao corpo escultural, ou a barriga
          tanquinho, essa é a técnica que pode ajudar na realização desse
          objetivo.
        </p>
      </BoxTextSelect>
      <BoxTextSelect isSelect={text === "pré e pós operatório"}>
        <h2>Pré e pós operatório</h2>
        <p>
          O <span>pré-operatório</span> da Lipo LAD consiste em uma avaliação,
          onde verificaremos: sua saúde,estrutura corpórea e o procedimento que
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
          Nosso acompanhamento no pós-cirúrgico e na sua recuperação, ainda é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas para
          realizar as drenagens e possibilitar um resultado de colagem do tecido
          bem feita, concluindo assim de maneira eficiente e possibilitando o
          resultado esperado de um corpo atlético e harmônico!
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
        <p>
          Aliado a técnica inovadora, busquei em feiras e congressos de
          medicina, tecnologias que pudessem otimizar a qualidade do resultado,
          e surpreendentemente encontrei o Vaser Lipo e o Vibro Lipo, duas
          tecnologias que possibilitam um resultado ainda mais espetacular, por
          promover a “colagem” da pele no músculo e diminuir a flacidez dos
          locais lipados. Outro grande trunfo de nosso sucesso é a alta
          performance dos resultados cirúrgicos através de uma equipe de
          profissionais altamente qualificadas para o pós cirúrgico e
          acompanhamento dos primeiros dias em home care, para quem mora em
          Palmas.
        </p>
        <p>
          Fora esses atendimentos personalizados, a Lipo de Alta Definição
          inicia na pré consulta on-line e segue até 12 meses depois, com
          acompanhamento dos resultados e apoio sobre qualquer dúvida ou
          consideração referente ao procedimento. Isso tudo porque prezo pela
          saúde, qualidade de vida e bem estar de minhas pacientes.
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
          A <span>lipoaspiração</span> de alta definição (Lipo LAD ou Lipo HD)
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década! Baseada em estudos da
          anatomia corporal avançadas, é associada a tecnologia VASER que
          minimiza os riscos e proporciona uma abordagem diferenciada nos
          depósitos de gordura corporal. O principal objetivo do procedimento é
          recuperar a definição muscular perdida em virtude do processo de
          acumulo de gordura, além das vantagens da lipoaspiração convencional,
          o procedimento restaura os grupamentos musculares, conferindo ao corpo
          um aspecto mais atético, esse procedimento emprega uma técnica que
          traz de volta as famosas "gominhas" do abdômen.
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
          Os resultados são perceptíveis logo que instantâneos, pois trabalha-se
          a estrutura corporal localizada. Os resultados são perceptíveis logo
          que instantâneos, pois trabalha-se a estrutura corporal da(o)
          paciente, fazendo contornos com sombras que definem o corpo e deixam
          com aspecto mais atlético. A técnica busca realçar a musculatura de
          maneira artística, utilizando de tecnologias com vaser Lipo que
          realiza a emulsificação da gordura e a retirada da mesma, o que
          permite a cirurgia LAD 4D deixa mais evidente a musculatura, fazendo
          com que sombras e contornos apareçam, delimitando assim curvas que
          tragam um aspecto mais atlético a essa paciente.
        </p>
      </BoxTextSelect>
    );
  if (text === "o que é a lipo lad")
    return (
      <BoxTextSelect>
        <h2>O que é a lipo lad</h2>
        <p>
          A <span> lipoaspiração de alta definição (Lipo LAD ou Lipo HD) </span>
          consiste em uma técnica inovadora, já utilizada na Colômbia, Estados
          Unidos, França e Espanha a mais de uma década.
        </p>
        <p>
          Baseada em estudos da anatomia corporal avançados, é associada a
          <span> tecnologia ultrassônica </span> que minimiza os riscos e
          proporciona uma abordagem diferenciada nos depósitos de gordura
          corporal.
        </p>
        <p>
          O principal objetivo do procedimento é recuperar a definição muscular
          perdida em virtude do processo de acúmulode gordura, além das
          vantagens da lipoaspiração convencional, o procedimento restaura os
          grupamentos musculares, conferindo ao corpo um aspecto mais atlético,
        </p>
        <p>
          esse procedimento emprega uma técnica que traz de volta os famosos
          “gominhos” do abdômen.
        </p>
        <p>
          Criada pelo Cirurgião Plástico Alfredo Hoyos, ela permite uma visão
          tridimensional do corpo. O procedimento é realizado em pessoas com um
          percentual baixo de gordura que querem eliminar a gordura localizada.
        </p>
        <p>
          Os resultados são perceptíveis logo que instantâneos, pois trabalha-se
          a estrutura corporal da(o) paciente, fazendo contornos com sombras que
          definem o corpo e deixam com aspecto mais atlético.
        </p>
        <p>
          Durante o procedimento, várias tecnologias são aplicadas para dar mais
          segurança e resultado as pacientes. Além de remover a gordura que está
          entre a pele e a musculatura, depois é aplicado um jato de plasma para
          que a pele cole no músculo. Assim, reduzindo a flacidez e estimulando
          o colágeno na pele.
        </p>
      </BoxTextSelect>
    );
  if (text === "benefícios")
    return (
      <BoxTextSelect>
        <h2>Benefícios</h2>
        <p>
          A <span>LipoHD</span>, além de melhores resultados estéticos que as
          técnicas convencionais, reduziu os riscos pós-operatórios e melhorou o
          tempo de recuperação, e está indicada para aqueles pacientes que
          desejam obter um físico mais atlético sem gastar muitas horas na
          academia e/ou fazendo dietas rigorosas.
        </p>
      </BoxTextSelect>
    );
  if (text === "indicação")
    return (
      <BoxTextSelect>
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
          Concluindo, a cirurgia Lipo LAD, mais que promover curvas e remover
          gordura, traz transformação de vida!
        </p>
        <p>
          “Acredito muito no poder de cuidar de pessoas que a medicina tem, e
          quando falo sobre cuidar, generalizo o poder dessa palavra, pois em 20
          anos atuando, acompanhei mudanças incríveis pós realização de
          procedimento” – Dr. Ícaro Samuel.
        </p>
      </BoxTextSelect>
    );
  if (text === "procedimento")
    return (
      <BoxTextSelect>
        <h2>Procedimento</h2>
        <p>
          O procedimento consiste em associar equipamentos modernos que
          trabalham as camadas de gordura corporal por meio de emissões de ondas
          ultrassônicas, facilitando a remoção da gordura, alcançando áreas que
          não são atingidas pela lipo convencional, de maneira mais segura e
          eficiente, conseguindo dessa forma, entregar um resultado mais
          atlético, definido e harmônico para as pacientes.
        </p>
        <p>
          Então se você tem o sonho de chegar ao corpo escultural, ou a barriga
          tanquinho, essa é a técnica que pode ajudar na realização desse
          objetivo.
        </p>
      </BoxTextSelect>
    );
  if (text === "pré e pós operatório")
    return (
      <BoxTextSelect>
        <h2>Pré e pós operatório</h2>
        <p>
          O <span>pré-operatório</span> da Lipo LAD consiste em uma avaliação,
          onde verificaremos: sua saúde,estrutura corpórea e o procedimento que
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
          Nosso acompanhamento no pós-cirúrgico e na sua recuperação, ainda é
          realizado por Fisioterapeuta e Esteticista altamente qualificadas para
          realizar as drenagens e possibilitar um resultado de colagem do tecido
          bem feita, concluindo assim de maneira eficiente e possibilitando o
          resultado esperado de um corpo atlético e harmônico!
        </p>
      </BoxTextSelect>
    );
};

export default ProcedimentosText;
