import Head from 'next/head'
import { SPOTIFY_LOGIN_URL } from '../services/constants'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <button onClick={() => (document.location.href = SPOTIFY_LOGIN_URL)}>
            Login with spotify
          </button>
        </p>
      </main>
    </div>
  )
}
