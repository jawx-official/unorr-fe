import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { useUtilStore } from '../stores/utils'

export default function App({ Component, pageProps }: AppProps) {
  const {title, description, keywords} = useUtilStore()
  return (
    <ChakraProvider>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="icon" href="/unorr_icon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
