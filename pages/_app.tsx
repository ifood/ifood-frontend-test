import Head from 'next/head'

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Spotifood</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
