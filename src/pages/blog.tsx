import { GetStaticProps } from "next";
import Blog from "@partials/blog/blog";
import Nav from "ui/component/menu-nav/menuNav";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Blog",
    },
  };
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <Blog />
    </>
  );
}
