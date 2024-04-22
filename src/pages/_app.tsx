import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tripp</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project to show places that i've been."
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
