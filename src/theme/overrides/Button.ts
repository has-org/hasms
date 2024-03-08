import { alpha, Theme } from '@mui/material/styles';
import { ButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
    outlinedTransparent: true,
  }
}

export default function Button(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyle = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const outlinedTransparentVariant = ownerState.variant === 'outlinedTransparent';

    const textVariant = ownerState.variant === 'text';

    const softVariant = ownerState.variant === 'soft';

    const smallSize = ownerState.size === 'small';

    const largeSize = ownerState.size === 'large';

    const defaultStyle = {
      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: theme.palette.common.white,
          "&:hover": {
            boxShadow: theme.customShadows.z8,
            backgroundColor: theme.palette.primary.main
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          borderColor: alpha(theme.palette.grey[500], 0.32),
          "&:hover": {
            borderColor: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover,
          },
        }),
        // TEXT
        ...(textVariant && {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.primary,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.24),
          },
        }),
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          // color: theme.palette[color]['contrastText'],
          "&:hover": {
            backgroundColor: alpha(theme.palette[color].dark, 0.31),
            color: theme.palette[color].main,
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][isLight ? "dark" : "light"],
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          "&:hover": {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          color: theme.palette[color][isLight ? "contrastText" : "main"],
          backgroundColor: theme.palette[color].main,

          border: `1px solid ${theme.palette[color].contrastText}`,
          "&:hover": {
            backgroundColor: alpha(theme.palette[color].darker, 0.82),
            color: theme.palette[color].main,
            textDecoration: "underline",
          },
        }),
        // OUTLINED TRANSPARENT
        ...(outlinedTransparentVariant && {
          color: theme.palette[color][isLight ? "contrastText" : "main"],
          backgroundColor: alpha(theme.palette[color].dark, 0.16),

          border: `1px solid ${theme.palette[color].contrastText}`,
          "&:hover": {
            backgroundColor: alpha(theme.palette[color].darker, 0.82),
            // color: theme.palette[color].main,
            textDecoration: "underline",
          },
        }),
      }),
    }));

    const disabledState = {
      '&.Mui-disabled': {
        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
      },
    };

    const size = {
      ...(smallSize && {
        height: 30,
        fontSize: 13,
        ...(softVariant && {
          padding: '4px 10px',
        }),
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
        ...(softVariant && {
          padding: '8px 22px',
        }),
      }),
    };

    return [...colorStyle, defaultStyle, disabledState, size];
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => rootStyle(ownerState),
      },
    },
  };
}
