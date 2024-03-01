import {
  argbFromHex,
  CorePalette,
  customColor,
  CustomColor,
  Hct,
  hexFromArgb,
  MaterialDynamicColors,
  SchemeContent,
  TonalPalette,
} from '@material/material-color-utilities'

import { Options } from '.'

const tones = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100]

const materialColors = {
  background: MaterialDynamicColors.background,
  'on-background': MaterialDynamicColors.onBackground,
  surface: MaterialDynamicColors.surface,
  'surface-dim': MaterialDynamicColors.surfaceDim,
  'surface-bright': MaterialDynamicColors.surfaceBright,
  'surface-container-lowest': MaterialDynamicColors.surfaceContainerLowest,
  'surface-container-low': MaterialDynamicColors.surfaceContainerLow,
  'surface-container': MaterialDynamicColors.surfaceContainer,
  'surface-container-high': MaterialDynamicColors.surfaceContainerHigh,
  'surface-container-highest': MaterialDynamicColors.surfaceContainerHighest,
  'on-surface': MaterialDynamicColors.onSurface,
  'surface-variant': MaterialDynamicColors.surfaceVariant,
  'on-surface-variant': MaterialDynamicColors.onSurfaceVariant,
  'inverse-surface': MaterialDynamicColors.inverseSurface,
  'inverse-on-surface': MaterialDynamicColors.inverseOnSurface,
  outline: MaterialDynamicColors.outline,
  'outline-variant': MaterialDynamicColors.outlineVariant,
  shadow: MaterialDynamicColors.shadow,
  scrim: MaterialDynamicColors.scrim,
  'surface-tint': MaterialDynamicColors.surfaceTint,
  primary: MaterialDynamicColors.primary,
  'on-primary': MaterialDynamicColors.onPrimary,
  'primary-container': MaterialDynamicColors.primaryContainer,
  'on-primary-container': MaterialDynamicColors.onPrimaryContainer,
  'inverse-primary': MaterialDynamicColors.inversePrimary,
  secondary: MaterialDynamicColors.secondary,
  'on-secondary': MaterialDynamicColors.onSecondary,
  'secondary-container': MaterialDynamicColors.secondaryContainer,
  'on-secondary-container': MaterialDynamicColors.onSecondaryContainer,
  tertiary: MaterialDynamicColors.tertiary,
  'on-tertiary': MaterialDynamicColors.onTertiary,
  'tertiary-container': MaterialDynamicColors.tertiaryContainer,
  'on-tertiary-container': MaterialDynamicColors.onTertiaryContainer,
  error: MaterialDynamicColors.error,
  'on-error': MaterialDynamicColors.onError,
  'error-container': MaterialDynamicColors.errorContainer,
  'on-error-container': MaterialDynamicColors.onErrorContainer,
}

export function themeFromSourceColor(color: number, isDark: boolean) {
  const scheme = new SchemeContent(Hct.fromInt(color), isDark, 0)
  const theme: { [key: string]: string } = {}

  for (const [key, value] of Object.entries(materialColors)) {
    theme[key] = hexFromArgb(value.getArgb(scheme));
  }
  return theme
}

export function generateTheme(
  source: number,
  customColors: CustomColor[] = [],
) {
  const palette = CorePalette.of(source)
  return {
    schemes: {
      light: themeFromSourceColor(source, false),
      dark: themeFromSourceColor(source, true),
    },
    palettes: {
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error,
    },
    customColors: customColors.map((c) => customColor(source, c)),
  }
}

const paletteColors = (palette: Record<string, TonalPalette>) => {
  const result: Record<string, string> = {}

  for (const key in palette) {
    tones.forEach((tone) => {
      result[`${key}-${tone}`] = hexFromArgb(palette[key].tone(tone))
    })
  }

  return result
}

export function createTheme({ sourceColor, customColors }: Omit<Options, 'defaultTheme'>) {
  const theme = generateTheme(
    argbFromHex(sourceColor),
    customColors.map((c) => ({
      value: argbFromHex(c.value),
      name: c.name,
      blend: c.blend,
    })),
  )
  
  const palettes: Record<string, TonalPalette> = theme.palettes

  theme.customColors.forEach((c) => {
    theme.schemes.light[c.color.name] = hexFromArgb(c.light.color)
    theme.schemes.light[`on-${c.color.name}`] = hexFromArgb(c.light.onColor)
    theme.schemes.light[`${c.color.name}-container`] = hexFromArgb(c.light.colorContainer)
    theme.schemes.light[`on-${c.color.name}-container`] = hexFromArgb(c.light.onColorContainer)

    theme.schemes.dark[c.color.name] = hexFromArgb(c.dark.color)
    theme.schemes.dark[`on-${c.color.name}`] = hexFromArgb(c.dark.onColor)
    theme.schemes.dark[`${c.color.name}-container`] = hexFromArgb(c.dark.colorContainer)
    theme.schemes.dark[`on-${c.color.name}-container`] = hexFromArgb(c.dark.onColorContainer)

    palettes[c.color.name] = CorePalette.of(c.value).a1
  })

  return {
    schemes: {
      light: theme.schemes.light,
      dark: theme.schemes.dark,
    },
    palettes:paletteColors(palettes),
  }
}
