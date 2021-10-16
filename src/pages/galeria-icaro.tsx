import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Footer from "ui/component/footer/footer";
import { Box } from "@material-ui/core";
import Galeria from "@partials/galeria/galeria";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "galeria",
    },
  };
};

export default function GaleriaIndex() {
  return (
    <>
      <Nav />
      <Galeria />
      <Box sx={{ position: "relative", py: 1 }}>
        <Footer />
      </Box>
    </>
  );
}
