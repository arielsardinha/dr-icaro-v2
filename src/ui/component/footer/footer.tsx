import ContentText from "./component/footerText";
import { styled } from "@material-ui/core/styles";
import { Container as MuiContainer } from "@material-ui/core";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Container>
      <BoxFooter>
        <ContentText />
        <NextLink href="/">
          <a rel="prev">
            <Logo src={"/logo.png"} alt={"icaro samuel"} title="icaro samuel" />
          </a>
        </NextLink>
      </BoxFooter>
    </Container>
  );
};

export default Footer;

const BoxFooter = styled(MuiContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled("footer")`
  position: sticky;
  bottom: 0;
  background-color: transparent;
`;

const Logo = styled("img")`
  margin-left: ${({ theme }) => theme.spacing(2)};
  width: 250px;
  height: 100px;
`;
