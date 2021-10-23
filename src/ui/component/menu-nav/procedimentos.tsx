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
          <NextLink href="/procedimentos/r24r-fast-track-recovery" passHref>
            <Procedimento rel="next" sx={{ mt: 5.5 }}>
              prótese de silicone
            </Procedimento>
          </NextLink>

          <NextLink href="/procedimentos/lipo-lad-hd" passHref>
            <Procedimento rel="next">lipo lad (lipo HD)</Procedimento>
          </NextLink>

          <NextLink href="/procedimentos/abdominoplastia" passHref>
            <Procedimento rel="next">abdominoplastia</Procedimento>
          </NextLink>

          <NextLink
            href="/procedimentos/mamoplastia-entenda-como-e-realizado-o-implante"
            passHref
          >
            <Procedimento rel="next">mamoplastia</Procedimento>
          </NextLink>

          <NextLink href="/procedimentos/mastopexia" passHref>
            <Procedimento rel="next">mastopexia</Procedimento>
          </NextLink>

          <NextLink href="/procedimentos/ninfoplastia" passHref>
            <Procedimento rel="next">ninfoplastia</Procedimento>
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
        <NextLink href="/dr-icaro-samuel" passHref>
          <Procedimento rel="next" sx={{ mt: 5.5 }}>
            Dr. Ícaro Samuel
          </Procedimento>
        </NextLink>

        <NextLink href="/equipe" passHref>
          <Procedimento rel="next">Equipe</Procedimento>
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
        <NextLink href="/dream-day" passHref>
          <Procedimento rel="next" sx={{ mt: 5.5 }}>
            dream day
          </Procedimento>
        </NextLink>

        <NextLink href="/galeria-icaro" passHref>
          <Procedimento rel="next">galeria</Procedimento>
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
