import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import LadFeminina from "@partials/procedimentos/lad-feminina/ladFeminina";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "lad feminina",
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
