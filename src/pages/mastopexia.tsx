import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Mastopexia from "@partials/procedimentos/mastopexia/mastopexia";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "mastopexia",
    },
  };
};

export default function MastopexiaIndex() {
  return (
    <>
      <Nav />
      <Mastopexia />
    </>
  );
}
