import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import ProteseDeSilicone from "@partials/procedimentos/protese-de-silicone/proteseDeSilicone";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "protese de silicone",
    },
  };
};

export default function proteseDeSiliconeIndex() {
  return (
    <>
      <Nav />
      <ProteseDeSilicone />
    </>
  );
}
