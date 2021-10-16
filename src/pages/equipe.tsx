import { GetStaticProps } from "next";
import SobreNos from "@partials/sobre-nos/sobreNos";
import Nav from "ui/component/menu-nav/menuNav";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "equipe",
    },
  };
};

export default function EquipeIndex() {
  return (
    <>
      <Nav />
      <SobreNos sobreNos={"equipe"} />
    </>
  );
}
