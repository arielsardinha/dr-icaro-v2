import { Box, styled } from "@material-ui/core";

const ContentText = () => (
  <BoxText>
    <Box>
      <address>
        BRASIL/PALMAS-TO
        <br />
        QUADRA ARSE 41, ALAMEDA 02,
        <br />
        SN, LOTE 07, QC 01
      </address>

      <p>
        CLÍNICA DR.ÍCARO SAMUEL,
        <br />
        PLANO DIRETOR SUL
      </p>
    </Box>

    <Box className="center">
      <address>
        2021 Clínica de Cirurgia Plástica Ícaro Samuel
        <br />
        Todos os Direitos Reservados
        <br />
        CNPJ 22.697.147/0001-15
      </address>
    </Box>

    <Box>
      <p>
        Contatos:
        <br />
        +55 63 3216 4091
        <br />
        +55 63 99947 2754
      </p>
    </Box>
  </BoxText>
);

export default ContentText;

const BoxText = styled("div")`
  display: flex;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(0.5, 0)};
  }
  p,
  address {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 0.8em;
  }
  .center {
    position: relative;
    padding: ${({ theme }) => theme.spacing(0, 3)};
    margin: ${({ theme }) => theme.spacing(0, 3)};
    &::after,
    ::before {
      content: ".";
      position: absolute;
      color: ${({ theme }) => theme.palette.text.primary};
      background-color: ${({ theme }) => theme.palette.text.primary};
      top: 20px;
      bottom: 20px;
    }
    &::after {
      left: 0;
    }
    &::before {
      right: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p,
    address {
      text-align: center;
    }
  }
`;
