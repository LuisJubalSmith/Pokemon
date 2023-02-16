import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  // return (
  //   <NextUIProvider theme={darkTheme}>
  //     <Component {...pageProps} />
  //   </NextUIProvider>
  // )
  return getLayout(
    <NextUIProvider theme={darkTheme}>
       <Component {...pageProps} />
    </NextUIProvider>
  )
}
