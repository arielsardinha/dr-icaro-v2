import { GetStaticProps } from "next";
import SobreNos from "@partials/sobre-nos/sobreNos";
import Nav from "ui/component/menu-nav/menuNav";
import { Box } from "@material-ui/core";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Dr. Ícaro Samuel",
    },
  };
};

export default function DrIcaroIndex() {
  return (
    <>
      <Nav />
      <SobreNos sobreNos={"icaro"} />
    </>
  );
}
