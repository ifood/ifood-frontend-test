import { extendTheme } from '@chakra-ui/core'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'brand.500',
        color: 'white',
        fontFamily: 'Sul Sans',
        overflow: 'hidden'
      }
    }
  },
  colors: {
    brand: {
      50: '#F4F4F6',
      100: '#E8E9EC',
      200: '#C6C9D0',
      300: '#A3A8B4',
      400: '#5F677B',
      500: '#1A2643',
      600: '#17223C',
      700: '#101728',
      800: '#0C111E',
      900: '#080B14'
    },
    secondary: {
      100: '#e4c2be',
      200: '#e7c9c5',
      300: '#eacfcc',
      400: '#edd6d4',
      500: '#f2e0de',
      600: '#d7a39d',
      700: '#bc665c',
      800: '#894138',
      900: '#48221e'
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'VinylRegular',
        fontWeight: 500,
        color: 'whitesmoke',
        textTransform: 'uppercase',
        letterSpacing: 5
      },
      sizes: {
        xl: {
          fontSize: ['62px', null, '122px']
        }
      }
    },
    CloseButton: {
      baseStyle: {
        color: 'brand.500'
      }
    }
  }
})
