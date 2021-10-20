import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import LadFeminina from "@partials/procedimentos/lad-feminina/ladFeminina";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Lipo LAD: Tudo sobre a lipo de alta definição",
    },
  };
};

export default function LadFemininaIndex() {
  return (
    <>
      <Nav />
      <LadFeminina />
    </>
  );
}
