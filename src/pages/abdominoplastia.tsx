import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";

import Abdominoplastia from "@partials/procedimentos/abdominoplastia/abdominoplastia";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "abdominoplastia",
    },
  };
};

export default function AbdominoplastiaIndex() {
  return (
    <>
      <Nav />
      <Abdominoplastia />
    </>
  );
}
