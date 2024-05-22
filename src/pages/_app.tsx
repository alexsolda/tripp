import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import '../styles/globals.css'

import { Amaranth } from 'next/font/google'

import { NextUIProvider } from '@nextui-org/react'
import { ViewOptionsProvider } from 'context/viewOptions'

const amaranth = Amaranth({
  subsets: ['latin'],
  variable: '--font-amaranth',
  weight: ['400', '700']
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <DefaultSeo {...SEO} />
      <main
        className={`${amaranth.variable} font-sans bg-black-800 min-h-screen`}
      >
        <NextNProgress
          color="#00758E"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <NextUIProvider>
          <ViewOptionsProvider>
            <Component {...pageProps} />
          </ViewOptionsProvider>
        </NextUIProvider>
      </main>
    </>
  )
}

export default App
