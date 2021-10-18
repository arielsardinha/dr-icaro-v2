import { DrIcaro } from "./drIcaro";
import UserInformation from "ui/component/userInformation/userInformation";
import { BoxEquipe, BoxStyled, BoxUsers } from "./sobreNos.styled";
import NextLink from "next/link";
import { useState } from "react";
import { Box } from "@material-ui/core";
import Footer from "ui/component/footer/footer";

const SobreNos = ({ sobreNos }) => {
  if (sobreNos === "equipe")
    return (
      <BoxStyled>
        <BoxUsers>
          <video muted={true} autoPlay loop className="bg_video">
            <source src="/video/backVideo.mp4" type="video/mp4" />
          </video>

          <NextLink href="/dr-icaro-samuel">
            <a className="boxIcaro">
              <UserInformation
                name={"Dr. Ícaro Samuel"}
                title={"CIRURGIÃO PLÁSTICO"}
                description={"Minha função é realizar sonhos!"}
                picture={"/Dr-ICaro-mini.png"}
                isDoctor={true}
              ></UserInformation>
            </a>
          </NextLink>

          <BoxEquipe>
            <UserInformation
              name={"Dra Gabriela"}
              title={"CIRURGIÃ AUXILIAR NUTRÓLOGA"}
              description="
            Auxilio o cirurgião principal durante
          todo o ato cirúrgico, conhecendo as
          etapas do procedimento, e facilitando as
          manobras e ações do cirurgião.
            Além disso, também auxilio no
          acompanhamento dos pacientes em
          pós-operatório, tanto no hospital
          quanto na clínica.
          "
              picture={"/Gabriela.png"}
            ></UserInformation>

            <UserInformation
              name={"Dra Patricia"}
              title={"MÉDICA ASSISTENTE"}
              description="
          Minha função é dar assistência a nossa
          equipe cirúrgica e as nossas pacientes
          durante o pré, trans e pós-operatório.
          "
              picture={"/Patricia.png"}
            ></UserInformation>

            <UserInformation
              name={"Samir"}
              title={"INSTRUMENTADORA"}
              description="
          Minha função primordial é garantir
          a segurança, qualidade e agilidade
          no transcorrer de todo o ato cirúrgico,
          evitando sempre qualquer tipo de
          contaminação no Sítio Cirúrgico.
          "
              picture={"/Samir.png"}
            ></UserInformation>

            <UserInformation
              name={"Havena"}
              title={"FISIOTERAPEUTA"}
              description="
          Meu objetivo é elevar a qualidade das
          nossas cirurgias no processo pós-operatório
          realizando as drenagens linfática, taping
          compressivo e talas anatômicas.
          "
              picture={"/Havena.png"}
            ></UserInformation>

            <UserInformation
              name={"Dalila"}
              title={"INSTRUMENTADORA"}
              description="
          Minha função é instrumentar, auxiliar
          e cuidar dos matérias desde do início
          da cirurgia até o final.
          "
              picture={"/Dalila.png"}
            ></UserInformation>

            <UserInformation
              name={"Evan"}
              title={"ENFERMEIRA"}
              description="
          Realizo atendimento domiciliar personalizado,
          juntamente com toda a equipe de enfermeiras.
          Monitoro e auxiliamos nos primeiros banhos,
          curativos, cuidados e avaliações durante
          a primeira fase após a cirurgia."
              picture={"/Evan.png"}
            ></UserInformation>

            <UserInformation
              name={"Lenício"}
              title={"PSICÓLOGO"}
              description="
          Meu objetivo é ajudar as nossas pacientes
          no processo da plástica da mente e fazer
          com que elas busquem o
          autoconhecimento.
          "
              picture={"/Lenicio.png"}
            ></UserInformation>

            <UserInformation
              name={"Tânia"}
              title={"NUTRICIONISTA"}
              description="
          Estou aqui para ajudar nossas pacientes
          a ter a melhor alimentação Pré e Pós
          ajudando assim na sua transformação
          alimentar.
          "
              picture={"/Tania.png"}
            ></UserInformation>

            <UserInformation
              name={"Lucas Morais"}
              title={"GESTOR EXECUTIVO"}
              description="
          Realizo a gestão executiva da clínica,
          garantindo que você receba o melhor
          de toda a equipe.
          "
              picture={"/Lucas.png"}
            ></UserInformation>

            <UserInformation
              name={"Milena Pereira"}
              title={"GESTORA FINANCEIRA"}
              description="
          Minha função é cuidar do financeiro da
          clínica e vou lhe ajudar no Planejamento
          do seu sonho.
          "
              picture={"/Milena.png"}
            ></UserInformation>

            <UserInformation
              name={"Maikon Rodrigues"}
              title={"GESTOR COMERCIAL"}
              description="
          Sou o responsável por todo o planejamento
          do seu sonho, sempre buscando
          a sua melhor experiência.
          "
              picture={"/Maykon.png"}
            ></UserInformation>
          </BoxEquipe>
        </BoxUsers>
        <Box sx={{ position: "relative" }}>
          <Footer />
        </Box>
      </BoxStyled>
    );
  if (sobreNos === "icaro")
    return (
      <BoxStyled>
        <video autoPlay loop className="bg_video">
          <source src="/video/backVideo.mp4" type="video/mp4" />
        </video>

        <DrIcaro />
      </BoxStyled>
    );
};
export default SobreNos;
