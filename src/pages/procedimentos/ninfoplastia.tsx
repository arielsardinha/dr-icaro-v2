import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Ninfoplastia from "@partials/procedimentos/ninfoplastia/ninfoplastia";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "ninfoplastia",
    },
  };
};

export default function NinfoplastiaIndex() {
  return (
    <>
      <Nav />
      <Ninfoplastia />
    </>
  );
}
