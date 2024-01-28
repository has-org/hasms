import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
        //   [theme.breakpoints.up("xl")]: {
        //     maxWidth: "1500px !important", 
        //   },
        },
      },
    },
  };
}
