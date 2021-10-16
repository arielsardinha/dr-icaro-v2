import { GetStaticProps } from "next";
import SobreNos from "@partials/sobre-nos/sobreNos";
import Nav from "ui/component/menu-nav/menuNav";

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
      <SobreNos sobreNos={'icaro'} />
    </>
  );
}
