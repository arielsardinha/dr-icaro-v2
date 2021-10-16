import { useTheme, useMediaQuery } from "@material-ui/core";

// ? verifica se está na versão mobile
export default function useIsMobile(): boolean {
  const theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile;
}

export function useIsXdesktop(): boolean {
  const theme = useTheme(),
    isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return isDesktop;
}
