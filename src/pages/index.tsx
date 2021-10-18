import { GetStaticProps } from "next";
import HeaderInit from "ui/component/header-init/headerInit";
import Header from "ui/component/header/header";
import Nav from "ui/component/menu-nav/menuNav";
import { AppContainer } from "@styles/pages/_app.styled";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Cirurgia Plástica em Palmas - TO",
    },
  };
};

export default function Index() {

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}
