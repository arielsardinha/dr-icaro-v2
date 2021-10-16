import { GetStaticProps } from "next";
import Nav from "ui/component/menu-nav/menuNav";
import Clinica from "@partials/clinica/clinica";
import { Box } from "@material-ui/core";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "dream day",
    },
  };
};

export default function ClinicaIndex() {
  return (
    <>
      <Nav />
      <Box sx={{ backgroundColor: "#C9B090" }}>
        <Clinica />
      </Box>
    </>
  );
}
