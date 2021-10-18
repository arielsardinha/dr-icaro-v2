import { BoxProcedimentos, Procedimento } from "./menuNav.styled";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import useIsMobile from "data/hook/useIsMobile";
import NextLink from "next/link";

const Procedimentos = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <BoxProcedimentos>
        <Title>Procedimentos</Title>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <NextLink href="/protese-de-silicone/R24R">
            <Procedimento sx={{ mt: 5.5 }}>prótese de silicone</Procedimento>
          </NextLink>

          <NextLink href="/lipo-hd-cirurgia-lad-4d">
            <Procedimento>lipo lad (lipo HD)</Procedimento>
          </NextLink>

          <NextLink href="/abdominoplastia">
            <Procedimento>abdominoplastia</Procedimento>
          </NextLink>

          <NextLink href="/mamoplastia">
            <Procedimento>mamoplastia</Procedimento>
          </NextLink>

          <NextLink href="/mastopexia">
            <Procedimento>mastopexia</Procedimento>
          </NextLink>

          <NextLink href="/ninfoplastia">
            <Procedimento>ninfoplastia</Procedimento>
          </NextLink>
        </Box>
      </BoxProcedimentos>
    </>
  );
};

export default Procedimentos;

export const SobreNos = () => {
  const isMobile = useIsMobile();
  return (
    <BoxProcedimentos>
      <Title>Sobre nós</Title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <NextLink href="/dr-icaro-samuel">
          <Procedimento sx={{ mt: 5.5 }}>Dr. Ícaro Samuel</Procedimento>
        </NextLink>

        <NextLink href="/equipe">
          <Procedimento>Equipe</Procedimento>
        </NextLink>
      </Box>
    </BoxProcedimentos>
  );
};

export const Clinica = () => {
  const isMobile = useIsMobile();
  return (
    <BoxProcedimentos>
      <Title>clínica</Title>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <NextLink href="/dream-day">
          <Procedimento sx={{ mt: 5.5 }}>dream day</Procedimento>
        </NextLink>

        <NextLink href="/galeria-icaro">
          <Procedimento href="/galeria-icaro">galeria</Procedimento>
        </NextLink>
      </Box>
    </BoxProcedimentos>
  );
};

const Title = styled(Typography)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: default;
  padding: ${({ theme }) => theme.spacing(0, 1)};
`;
