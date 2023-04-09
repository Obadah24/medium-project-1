import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {UserProvider, SpecialsProvider, OptionProvider, CustomerProvider} from './components/ContextApi'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// extending the theme
const colors = {
  brand: {
    900: '#4c5e57',//Green
    800: '#f4ce14',//Yellow
  },
  second: {
    700: '#ee9990',//Orange
    600: '#fbdabb',//biege
    500: '#edefee',//white
    400: '#333333',//black
    300: '#000000',//black
    200: '#D9D9D9',//biege2
  },
  sizes: {
    "2xs": "320px",
    "xs": "480px",
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
    "4xl": "2560px",
    "5xl": "3840px",
  }
}
const fonts = {
  Karla: 'Karla',
  MarkaziText: 'MarkaziText',
  Roboto: 'Roboto'
}

const theme = extendTheme({ colors, fonts })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomerProvider>
      <OptionProvider>
        <SpecialsProvider>
          <UserProvider>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </UserProvider>
        </SpecialsProvider>
      </OptionProvider>
    </CustomerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
// These are the default breakpoints
const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

// Internally, we transform to this
const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']
*/ 

