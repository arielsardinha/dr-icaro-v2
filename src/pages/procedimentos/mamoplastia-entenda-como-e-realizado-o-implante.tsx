import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Mamoplastia from "@partials/procedimentos/mamoplastia/mamoplastia";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Mamoplastia: entenda como é realizado o implante",
    },
  };
};

export default function MamoplastiaIndex() {
  return (
    <>
      <Nav />
      <Mamoplastia />
    </>
  );
}
