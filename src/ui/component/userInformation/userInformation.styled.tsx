import { styled } from "@material-ui/core/styles";
import { Theme, Box, Avatar } from "@material-ui/core";

function handleGrid(theme: Theme, isDoctor: boolean) {
  if (isDoctor) {
    return `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 250px;
            .MuiAvatar-circular{
                max-width: 130px;
            }
        `;
  }
  return `
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: repeat(3, 35px);
            grid-template-areas:
            "picture nome"
            "picture title"
            "picture description";
            padding: ${theme.spacing(3)};
  `;
}

export const UserInformationContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDoctor",
})<{ isDoctor?: boolean }>`
  gap: ${({ theme }) => theme.spacing(0, 1)};
  ${({ theme, isDoctor }) => handleGrid(theme, isDoctor)}
  p {
    margin: 0;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-rows: repeat(3, 43px);
    &.MuiBox-root {
      margin: ${({ theme }) => theme.spacing(9, 0)};
    }
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    margin: ${({ theme }) => theme.spacing(10, 0)};
  }
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: picture;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
  border: solid 4px ${({ theme }) => theme.palette.text.primary};
`;

export const UserName = styled("p")`
  grid-area: nome;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.5em;
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 1.3em;
  }
`;

export const UserTitle = styled("p")`
  grid-area: title;
  color: ${({ theme }) => theme.palette.text.secondary};
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 0.8em;
  }
`;

export const UserDescription = styled("p")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.8em;
  text-align: left;
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 0.7em;
  }
`;
