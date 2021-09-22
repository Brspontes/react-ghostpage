import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#47585B",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
      global: {
          body: {
            bgGradient: 'linear-gradient(136.16deg, rgba(91, 135, 75, 0.97) 12.91%, rgba(12, 55, 32, 0.87) 87.68%)',
            color: '#47585B',
          }
      }
  }
})
