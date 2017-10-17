// @flow
import { StyleSheet } from 'react-native'

// TODO:KS Add support for themes as well
// Color name taken from http://www.htmlcsscolor.com/
const zircon = '#ebebea'
export const nightRider = '#333333'
export const grey = '#777777'
export const whiteSmoke = '#f0f0f0'
export const mantis = '#85bf43'
const mantisRGB = '133, 191, 67'
export const white = '#ffffff'

const sirocco = '#636564'
const corduroy = '#3f4140'
const eclipse = '#3f3f3f'
const matterhorn = '#535353'
const blackPearl = '#242b2d'
const dimGray = '#686868'
const nobel = '#a0a0a0'
const venetianRed = '#d0021b'
export const veniceBlue = '#2A5270'
const dodgerBlue = '#0d8ffc'
const black = '#000000'
const seaBuckthorn = '#f79347'
const pumpkin = '#F68127'
const olivine = '#97C85F'

// color shades
const primaryShade = '1.0'
const secondaryShade = '0.5'

export const color = {
  actions: {
    primary: pumpkin,
    secondary: seaBuckthorn,
    tertiary: mantis,
    quaternary: olivine,
    fifth: white,
    dangerous: venetianRed,
    none: white,
    button: {
      primary: {
        rgba: mantisRGB + ', ' + primaryShade,
        shade: primaryShade,
      },
      secondary: {
        rgba: mantisRGB + ', ' + secondaryShade,
        shade: secondaryShade,
      },
    },
    font: {
      primary: white,
      secondary: white,
      tertiary: white,
      quaternary: white,
      fifth: mantis,
      dangerous: white,
    },
  },
  bg: {
    primary: {
      color: nightRider,
      font: {
        primary: white,
        secondary: zircon,
        tertiary: nightRider,
      },
    },
    secondary: {
      color: grey,
      font: {
        primary: white,
        secondary: matterhorn,
        tertiary: whiteSmoke,
        quaternary: dodgerBlue,
      },
    },
    tertiary: {
      color: whiteSmoke,
      font: {
        primary: nightRider,
        secondary: dimGray,
        tertiary: grey,
      },
    },
    quaternary: {
      color: mantis,
      font: {
        primary: white,
      },
    },
    fifth: {
      color: white,
      font: {
        primary: grey,
        secondary: zircon,
        tertiary: eclipse,
      },
    },
    sixth: {
      color: nightRider,
      font: {
        primary: white,
      },
    },
  },
}

export const font = {
  size: {
    XS: 12,
    S: 15,
    M: 17,
    ML: 20,
  },
}

export const PADDING_HORIZONTAL = 15
export const PADDING_VERTICAL = 8
export const MARGIN_BOTTOM = 4
export const OFFSET_1X = 10
export const OFFSET_2X = 20
export const OFFSET_3X = 30
export const OFFSET_4X = 40
export const OFFSET_5X = 50
export const OFFSET_6X = 60
export const OFFSET_7X = 70
export const OFFSET_9X = 95
export const barStyleDark = 'dark-content'
export const barStyleLight = 'light-content'
export const SHADOW_RADIUS = 8
export const HAIRLINE_WIDTH = StyleSheet.hairlineWidth / 2

export const bubbleSize = {
  XS: 40,
  S: 60,
  M: 80,
  L: 100,
  XL: 120,
  XXL: 140,
}

export const PIN_CODE_BORDER_BOTTOM = 4
