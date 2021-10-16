import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Contato from "@partials/contato/contato";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "contato",
    },
  };
};

export default function ContatoIndex() {
  return (
    <>
      <Nav />
      <Contato />
    </>
  );
}
